import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceRestSpaceRequest } from '../../../../../service/service.rest.space-request';

@Component({
    selector: 'app-modal-request',
    templateUrl: './modal-request.component.html',
    styleUrls: ['./modal-request.component.scss']
})
export class ModalRequestComponent {

    @Input() id:number;
    @Output() onAddRequest = new EventEmitter<number>();
    closeResult: string;

    constructor(private modalService: NgbModal, private serviceRestSpaceRequest: ServiceRestSpaceRequest) { }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    private addRequest(){
      this.serviceRestSpaceRequest.addRequest({userId:localStorage.getItem('id'),spaceId:this.id}).subscribe();
      this.onAddRequest.emit(this.id);
    }
}
