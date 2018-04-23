import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalRequestComponent, ModalReleaseComponent, ModalDeleteComponent } from "./components";
import { SpacesRoutingModule } from './spaces-routing.module';
import { SpacesComponent } from './spaces.component';
import { PageHeaderModule } from './../../shared';
import { ServiceRestParking } from '../../../service/service.rest.parking';
import { ServiceRestSpace } from '../../../service/service.rest.space';
import { ServiceRestSpaceRequest } from '../../../service/service.rest.space-request';

@NgModule({
    imports: [CommonModule, SpacesRoutingModule, PageHeaderModule, NgbModule.forRoot()],
    declarations: [SpacesComponent, ModalReleaseComponent, ModalDeleteComponent, ModalRequestComponent],
    providers: [ServiceRestParking,ServiceRestSpace,ServiceRestSpaceRequest]
})
export class SpacesModule {}
