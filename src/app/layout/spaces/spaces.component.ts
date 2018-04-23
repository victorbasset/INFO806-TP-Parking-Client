import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceRestSpace } from '../../../service/service.rest.space';
import { ServiceRestSpaceRequest } from '../../../service/service.rest.space-request';

@Component({
    selector: 'app-spaces',
    templateUrl: './spaces.component.html',
    styleUrls: ['./spaces.component.scss'],
    animations: [routerTransition()]
})
export class SpacesComponent implements OnInit {

  id:number = this.activeRoute.snapshot.params['id'];
  public spaces:any;
  public role:string = localStorage.getItem('role');
  public userId:string = localStorage.getItem('id');

  constructor(private router:Router, private activeRoute: ActivatedRoute, private serviceRestParking: ServiceRestSpace,private serviceRestSpaceRequest: ServiceRestSpaceRequest) {}

  ngOnInit() {
    this.serviceRestParking.findByParking(this.id).subscribe(spaces => {
      this.serviceRestSpaceRequest.requestByParking(this.id).subscribe(requests => {
        Object.values(spaces).forEach( space => {
            Object.values(requests).forEach( request => {
              if(space.id == request.space.id && request.user.id == this.userId){
                space.requested = true;
              }else if(space.id == request.space.id){
                space.requested = false;
              }
            });
          }
        );
        this.spaces = spaces;
      });
    });
  }

  onDeleted(id) {
    const index = this.spaces.findIndex(space => space.id === id);
    this.spaces.splice(index, 1);
  }

  onAddRequest(id) {
    const index = this.spaces.findIndex(space => space.id === id);
    this.spaces[index].requested = true;
  }

  onReleaseSpace(id) {
    const index = this.spaces.findIndex(space => space.id === id);
    this.spaces[index].user = null;
  }
}
