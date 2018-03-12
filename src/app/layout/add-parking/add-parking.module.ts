import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddParkingRoutingModule } from './add-parking-routing.module';
import { AddParkingComponent } from './add-parking.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AddParkingRoutingModule, PageHeaderModule],
    declarations: [AddParkingComponent]
})
export class AddParkingModule {}
