import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServiceRestSpace } from '../../../service/service.rest.space';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRestParking } from '../../../service/service.rest.parking';

@Component({
    selector: 'app-add-space',
    templateUrl: './add-space.component.html',
    styleUrls: ['./add-space.component.scss'],
    animations: [routerTransition()]
})
export class AddSpaceComponent implements OnInit {

    id:number = this.activeRoute.snapshot.params['id'];
    public parking:any;
    public nb:number;
    public type:string;

    constructor(private router:Router, private activeRoute: ActivatedRoute, private serviceRestSpace: ServiceRestSpace, private serviceRestParking: ServiceRestParking) {}

    ngOnInit() {
      this.serviceRestParking.getParking(this.id).subscribe(data => this.parking = data);
    }

    onSubmit(){
      if(this.type != undefined){
        if(this.nb == 1) {
          this.serviceRestSpace.addSpace({
            "user": null,
            "parking": {"id": this.id},
            "type": this.type
          }).subscribe(
            success => this.router.navigate(["/spaces", this.id])
          );
        }
        if(this.nb > 1) {
          this.serviceRestSpace.addManySpace(this.nb,{
            "user": null,
            "parking": {"id": this.id},
            "type": this.type
          }).subscribe(
            success => this.router.navigate(["/spaces", this.id])
          );
        }
      }
    }
}
