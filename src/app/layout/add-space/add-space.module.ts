import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddSpaceRoutingModule } from './add-space-routing.module';
import { AddSpaceComponent } from './add-space.component';
import { PageHeaderModule } from './../../shared';
import { ServiceRestSpace } from '../../../service/service.rest.space';
import { ServiceRestParking } from '../../../service/service.rest.parking';

@NgModule({
    imports: [FormsModule, AddSpaceRoutingModule, PageHeaderModule],
    declarations: [AddSpaceComponent],
    providers: [ServiceRestSpace, ServiceRestParking]
})
export class AddSpaceModule {}
