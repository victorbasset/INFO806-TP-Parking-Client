import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateSpaceRoutingModule } from './update-space-routing.module';
import { UpdateSpaceComponent } from './update-space.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, UpdateSpaceRoutingModule, PageHeaderModule],
    declarations: [UpdateSpaceComponent]
})
export class UpdateSpaceModule {}
