import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRestSpace } from '../../../service/service.rest.space';

@Component({
    selector: 'app-update-space',
    templateUrl: './update-space.component.html',
    styleUrls: ['./update-space.component.scss'],
    animations: [routerTransition()]
})
export class UpdateSpaceComponent implements OnInit {

    id_parking:number = this.activeRoute.snapshot.params['id-parking'];
    id_user:number = this.activeRoute.snapshot.params['id-user'];
    id_space:number = this.activeRoute.snapshot.params['id-space'];
    public type:string;
    public free:boolean;

    constructor(private router:Router, private activeRoute: ActivatedRoute, private serviceRestSpace: ServiceRestSpace) {}

    ngOnInit() {}


  onSubmit(){
    if(this.type != undefined) {
      this.serviceRestSpace.putSpace({
        "id": this.id_space,
        "type": this.type,
        "userId": this.free ? 0 : this.id_user
      }).subscribe(
        success => this.router.navigate(["/spaces", this.id_parking])
      );
    }
  }
}
