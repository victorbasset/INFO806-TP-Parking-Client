import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-add-space',
    templateUrl: './add-space.component.html',
    styleUrls: ['./add-space.component.scss'],
    animations: [routerTransition()]
})
export class AddSpaceComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
