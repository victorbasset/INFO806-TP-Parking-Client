import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyspacesRoutingModule } from './myspaces-routing.module';
import { MyspacesComponent } from './myspaces.component';
import { PageHeaderModule } from './../../shared';
import { ServiceRestSpace } from '../../../service/service.rest.space';
import { ModalReleaseComponent } from "./components";

@NgModule({
    imports: [
      CommonModule,
      MyspacesRoutingModule,
      PageHeaderModule,
      NgbModule.forRoot(),
    ],
    declarations: [
      MyspacesComponent,ModalReleaseComponent
    ],
    providers: [ServiceRestSpace]
})
export class MyspacesModule {}
