import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-space-requests',
    templateUrl: './space-requests.component.html',
    styleUrls: ['./space-requests.component.scss'],
    animations: [routerTransition()]
})
export class SpaceRequestsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
