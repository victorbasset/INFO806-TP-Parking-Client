import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParkingsRoutingModule } from './parkings-routing.module';
import { ParkingsComponent } from './parkings.component';
import { PageHeaderModule } from './../../shared';
import { ModalComponent } from "./components";
import { ServiceRestParking } from '../../../service/service.rest.parking';

@NgModule({
    imports: [
      CommonModule,
      ParkingsRoutingModule,
      PageHeaderModule,
      NgbModule.forRoot(),
    ],
    declarations: [
      ParkingsComponent,
      ModalComponent
    ],
    providers: [ServiceRestParking]
})
export class ParkingsModule {}
