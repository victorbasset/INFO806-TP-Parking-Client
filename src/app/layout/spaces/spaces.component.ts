import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-spaces',
    templateUrl: './spaces.component.html',
    styleUrls: ['./spaces.component.scss'],
    animations: [routerTransition()]
})
export class SpacesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
