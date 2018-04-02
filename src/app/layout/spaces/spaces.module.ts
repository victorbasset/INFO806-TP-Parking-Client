import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalRequestComponent, ModalReleaseComponent, ModalDeleteComponent } from "./components";
import { SpacesRoutingModule } from './spaces-routing.module';
import { SpacesComponent } from './spaces.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, SpacesRoutingModule, PageHeaderModule, NgbModule.forRoot()],
    declarations: [SpacesComponent, ModalReleaseComponent, ModalDeleteComponent, ModalRequestComponent]
})
export class SpacesModule {}
