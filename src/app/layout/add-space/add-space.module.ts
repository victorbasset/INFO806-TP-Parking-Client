import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSpaceRoutingModule } from './add-space-routing.module';
import { AddSpaceComponent } from './add-space.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AddSpaceRoutingModule, PageHeaderModule],
    declarations: [AddSpaceComponent]
})
export class AddSpaceModule {}
