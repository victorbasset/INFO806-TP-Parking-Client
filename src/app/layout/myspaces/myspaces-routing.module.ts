import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyspacesComponent } from './myspaces.component';

const routes: Routes = [
    {
        path: '', component: MyspacesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyspacesRoutingModule {
}
