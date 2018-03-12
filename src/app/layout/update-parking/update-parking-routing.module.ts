import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateParkingComponent } from './update-parking.component';

const routes: Routes = [
    {
        path: '', component: UpdateParkingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdateParkingRoutingModule {
}
