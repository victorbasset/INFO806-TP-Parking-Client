import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceRestSpace } from '../../../../../service/service.rest.space';

@Component({
    selector: 'app-modal-release',
    templateUrl: './modal-release.component.html',
    styleUrls: ['./modal-release.component.scss']
})
export class ModalReleaseComponent {

  @Input() id:number;
  @Input() type:string;
  @Output() onReleaseSpace = new EventEmitter<number>();
    closeResult: string;
    constructor(private modalService: NgbModal, private serviceRestSpace: ServiceRestSpace) { }

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

    private releaseSpace(){
      this.serviceRestSpace.putSpace({
        "id": this.id,
        "type": this.type,
        "userId": null
      }).subscribe();
      this.onReleaseSpace.emit(this.id);
    }
}
