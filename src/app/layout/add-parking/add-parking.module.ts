import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddParkingRoutingModule } from './add-parking-routing.module';
import { AddParkingComponent } from './add-parking.component';
import { PageHeaderModule } from './../../shared';
import { ServiceRestParking } from '../../../service/service.rest.parking';

@NgModule({
    imports: [FormsModule, AddParkingRoutingModule, PageHeaderModule],
    declarations: [AddParkingComponent],
    providers: [ServiceRestParking]
})
export class AddParkingModule {}
