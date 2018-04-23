import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpaceRequestsRoutingModule } from './space-requests-routing.module';
import { SpaceRequestsComponent } from './space-requests.component';
import { PageHeaderModule } from './../../shared';
import { ModalAcceptComponent } from "./components";
import { ModalRefuseComponent } from "./components";
import { ServiceRestSpaceRequest } from '../../../service/service.rest.space-request';

@NgModule({
    imports: [CommonModule, SpaceRequestsRoutingModule, PageHeaderModule, NgbModule.forRoot()],
    declarations: [SpaceRequestsComponent, ModalAcceptComponent, ModalRefuseComponent],
    providers: [ServiceRestSpaceRequest]
})
export class SpaceRequestsModule {}
