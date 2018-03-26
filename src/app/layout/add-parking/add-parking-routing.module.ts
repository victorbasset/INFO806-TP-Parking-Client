import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddParkingComponent } from './add-parking.component';

const routes: Routes = [
    {
        path: '', component: AddParkingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddParkingRoutingModule {
}
