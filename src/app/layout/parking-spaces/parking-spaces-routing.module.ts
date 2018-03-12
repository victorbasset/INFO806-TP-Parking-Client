import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingSpacesComponent } from './parking-spaces.component';

const routes: Routes = [
    {
        path: '', component: ParkingSpacesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParkingSpacesRoutingModule {
}
