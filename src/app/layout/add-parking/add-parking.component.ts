import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-add-parking',
    templateUrl: './add-parking.component.html',
    styleUrls: ['./add-parking.component.scss'],
    animations: [routerTransition()]
})
export class AddParkingComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
