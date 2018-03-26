import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from "./components";
import { ParkingSpacesRoutingModule } from './parking-spaces-routing.module';
import { ParkingSpacesComponent } from './parking-spaces.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ParkingSpacesRoutingModule, PageHeaderModule, NgbModule.forRoot()],
    declarations: [ParkingSpacesComponent, ModalComponent]
})
export class ParkingSpacesModule {}
