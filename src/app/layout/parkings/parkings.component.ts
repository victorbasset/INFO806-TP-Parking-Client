import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-parkings',
    templateUrl: './parkings.component.html',
    styleUrls: ['./parkings.component.scss'],
    animations: [routerTransition()]
})
export class ParkingsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
