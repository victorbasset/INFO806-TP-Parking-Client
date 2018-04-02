import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-update-space',
    templateUrl: './update-space.component.html',
    styleUrls: ['./update-space.component.scss'],
    animations: [routerTransition()]
})
export class UpdateSpaceComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
