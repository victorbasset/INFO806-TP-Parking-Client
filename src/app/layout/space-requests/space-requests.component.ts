import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServiceRestSpaceRequest } from '../../../service/service.rest.space-request';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-space-requests',
    templateUrl: './space-requests.component.html',
    styleUrls: ['./space-requests.component.scss'],
    animations: [routerTransition()]
})
export class SpaceRequestsComponent implements OnInit {

    id:number = this.activeRoute.snapshot.params['id'];
    public requests:any;

    constructor(private serviceRestSpaceRequest: ServiceRestSpaceRequest, private activeRoute: ActivatedRoute,) {}

    ngOnInit() {
      this.serviceRestSpaceRequest.requestByParking(this.id).subscribe(
        data => this.requests = data
      );
      console.log(this.requests);
    }

    onAccepted(id) {
      const index = this.requests.findIndex(request => request.id === id);
      this.requests.splice(index, 1);
    }
    onRejected(id) {
      const index = this.requests.findIndex(request => request.id === id);
      this.requests.splice(index, 1);
    }

}
