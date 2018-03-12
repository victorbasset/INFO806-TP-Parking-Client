import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-update-parking',
    templateUrl: './update-parking.component.html',
    styleUrls: ['./update-parking.component.scss'],
    animations: [routerTransition()]
})
export class UpdateParkingComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
