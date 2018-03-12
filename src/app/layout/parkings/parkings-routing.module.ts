import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingsComponent } from './parkings.component';

const routes: Routes = [
    {
        path: '', component: ParkingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParkingsRoutingModule {
}
