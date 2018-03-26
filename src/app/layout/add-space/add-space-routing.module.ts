import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSpaceComponent } from './add-space.component';

const routes: Routes = [
    {
        path: '', component: AddSpaceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddSpaceRoutingModule {
}
