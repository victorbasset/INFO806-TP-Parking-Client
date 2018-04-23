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
            { path: 'space-requests/:id', loadChildren: './space-requests/space-requests.module#SpaceRequestsModule' },
            { path: 'add-space/:id', loadChildren: './add-space/add-space.module#AddSpaceModule' },
            { path: 'update-parking/:id', loadChildren: './update-parking/update-parking.module#UpdateParkingModule'},
            { path: 'spaces/:id-parking/user/:id-user/update-space/:id-space', loadChildren: './update-space/update-space.module#UpdateSpaceModule' },
            { path: 'spaces/:id', loadChildren: './spaces/spaces.module#SpacesModule' },
            { path: 'myspaces', loadChildren: './myspaces/myspaces.module#MyspacesModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
