import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'parkings', loadChildren: './parkings/parkings.module#ParkingsModule' },
            { path: 'add-parking', loadChildren: './add-parking/add-parking.module#AddParkingModule' },
            { path: 'add-space', loadChildren: './add-space/add-space.module#AddSpaceModule' },
            { path: 'update-parking', loadChildren: './update-parking/update-parking.module#UpdateParkingModule' },
            { path: 'parking-spaces', loadChildren: './parking-spaces/parking-spaces.module#ParkingSpacesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
