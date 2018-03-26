import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateParkingRoutingModule } from './update-parking-routing.module';
import { UpdateParkingComponent } from './update-parking.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, UpdateParkingRoutingModule, PageHeaderModule],
    declarations: [UpdateParkingComponent]
})
export class UpdateParkingModule {}
