import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingSpacesRoutingModule } from './parking-spaces-routing.module';
import { ParkingSpacesComponent } from './parking-spaces.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ParkingSpacesRoutingModule, PageHeaderModule],
    declarations: [ParkingSpacesComponent]
})
export class ParkingSpacesModule {}
