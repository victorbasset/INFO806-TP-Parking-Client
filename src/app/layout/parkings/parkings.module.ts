import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingsRoutingModule } from './parkings-routing.module';
import { ParkingsComponent } from './parkings.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ParkingsRoutingModule, PageHeaderModule],
    declarations: [ParkingsComponent]
})
export class ParkingsModule {}
