import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParkingsRoutingModule } from './parkings-routing.module';
import { ParkingsComponent } from './parkings.component';
import { PageHeaderModule } from './../../shared';
import { ModalComponent } from "./components";
import { ServiceRestParking } from '../../../service/service.rest.parking';
import { ServiceRestSpaceRequest } from '../../../service/service.rest.space-request';
import { ServiceRestSpace } from '../../../service/service.rest.space';

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
    providers: [ServiceRestParking,ServiceRestSpaceRequest,ServiceRestSpace]
})
export class ParkingsModule {}
