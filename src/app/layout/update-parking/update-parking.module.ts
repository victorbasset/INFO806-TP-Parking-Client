import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UpdateParkingRoutingModule } from './update-parking-routing.module';
import { UpdateParkingComponent } from './update-parking.component';
import { PageHeaderModule } from './../../shared';
import { ServiceRestParking } from '../../../service/service.rest.parking';

@NgModule({
    imports: [FormsModule, UpdateParkingRoutingModule, PageHeaderModule],
    declarations: [UpdateParkingComponent],
    providers: [ServiceRestParking]
})
export class UpdateParkingModule {}
