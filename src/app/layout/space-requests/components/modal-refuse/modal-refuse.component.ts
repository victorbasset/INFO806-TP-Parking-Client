import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceRestSpaceRequest } from '../../../../../service/service.rest.space-request';

@Component({
    selector: 'app-modal-refuse',
    templateUrl: './modal-refuse.component.html',
    styleUrls: ['./modal-refuse.component.scss']
})
export class ModalRefuseComponent {

    @Input() id:number;
    @Output() onRejected = new EventEmitter<number>();

    closeResult: string;
    constructor(private modalService: NgbModal,private serviceRestSpaceRequest: ServiceRestSpaceRequest) { }

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

    private rejectRequest(){
      this.serviceRestSpaceRequest.rejectRequest(this.id).subscribe();
      this.onRejected.emit(this.id);
    }
}
