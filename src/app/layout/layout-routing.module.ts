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
            { path: 'space-requests', loadChildren: './space-requests/space-requests.module#SpaceRequestsModule' },
            { path: 'add-space', loadChildren: './add-space/add-space.module#AddSpaceModule' },
            { path: 'update-parking', loadChildren: './update-parking/update-parking.module#UpdateParkingModule' },
            { path: 'update-space', loadChildren: './update-space/update-space.module#UpdateSpaceModule' },
            { path: 'spaces', loadChildren: './spaces/spaces.module#SpacesModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
