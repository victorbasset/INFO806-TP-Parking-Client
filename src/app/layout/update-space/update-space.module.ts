import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UpdateSpaceRoutingModule } from './update-space-routing.module';
import { UpdateSpaceComponent } from './update-space.component';
import { PageHeaderModule } from './../../shared';
import { ServiceRestSpace } from '../../../service/service.rest.space';

@NgModule({
    imports: [FormsModule, UpdateSpaceRoutingModule, PageHeaderModule],
    declarations: [UpdateSpaceComponent],
    providers: [ServiceRestSpace]
})
export class UpdateSpaceModule {}
