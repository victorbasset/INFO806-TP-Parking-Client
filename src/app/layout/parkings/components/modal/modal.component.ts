import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceRestParking } from '../../../../../service/service.rest.parking';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() id:number;
  @Output() onDeleted = new EventEmitter<number>();

  closeResult: string;
  constructor(private modalService: NgbModal,private serviceRestParking: ServiceRestParking) { }

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
  private deleteParking(){
    console.log(this.id);
    this.serviceRestParking.deleteParking(this.id).subscribe();
    this.onDeleted.emit(this.id);
  }
}
