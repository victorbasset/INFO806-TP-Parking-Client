import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceRestParking } from '../../../service/service.rest.parking';

@Component({
    selector: 'app-update-parking',
    templateUrl: './update-parking.component.html',
    styleUrls: ['./update-parking.component.scss'],
    animations: [routerTransition()]
})
export class UpdateParkingComponent implements OnInit {

  id:number = this.activeRoute.snapshot.params['id'];
  parking:any;
  name: string;
  address: string;

  constructor(private router:Router, private activeRoute: ActivatedRoute, private serviceRestParking: ServiceRestParking) {}

  ngOnInit() {
    this.serviceRestParking.getParking(this.id).subscribe(data => {
      this.parking = data;
      this.name = this.parking.name;
      this.address = this.parking.address;
      }
    );
  }

  onSubmit(){
    console.log( this.name, this.address);
    this.serviceRestParking.putParking({"id": this.parking.id, "name": this.name, "address": this.address}).subscribe(
      success => this.router.navigate(["/parkings"])
    );
  }
}
