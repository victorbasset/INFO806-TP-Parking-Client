import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-parking-spaces',
    templateUrl: './parking-spaces.component.html',
    styleUrls: ['./parking-spaces.component.scss'],
    animations: [routerTransition()]
})
export class ParkingSpacesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
