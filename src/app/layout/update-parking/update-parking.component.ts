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
  name: String = "";
  address: String = "";

  constructor(private router:Router, private activeRoute: ActivatedRoute, private serviceRestParking: ServiceRestParking) {}

  ngOnInit() {
    this.serviceRestParking.getParking(this.id).subscribe(data => this.parking = data);
  }

  onSubmit(){
    this.serviceRestParking.putParking({"id": this.parking.id, "name": this.name, "address": this.address}).subscribe(
      success => this.router.navigate(["/parkings"])
    );
  }
}
