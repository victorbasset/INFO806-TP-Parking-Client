import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceRequestsComponent } from './space-requests.component';


const routes: Routes = [
    {
        path: '', component: SpaceRequestsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpaceRequestsRoutingModule {
}
