import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpaceRequestsRoutingModule } from './space-requests-routing.module';
import { SpaceRequestsComponent } from './space-requests.component';
import { PageHeaderModule } from './../../shared';
import { ModalAcceptComponent } from "./components";
import { ModalRefuseComponent } from "./components";

@NgModule({
    imports: [CommonModule, SpaceRequestsRoutingModule, PageHeaderModule, NgbModule.forRoot()],
    declarations: [SpaceRequestsComponent, ModalAcceptComponent, ModalRefuseComponent]
})
export class SpaceRequestsModule {}
