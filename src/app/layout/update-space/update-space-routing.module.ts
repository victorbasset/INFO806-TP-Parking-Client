import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateSpaceComponent } from './update-space.component';

const routes: Routes = [
    {
        path: '', component: UpdateSpaceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdateSpaceRoutingModule {
}
