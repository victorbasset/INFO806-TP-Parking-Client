import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServiceRestParking } from '../../../service/service.rest.parking';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-parking',
    templateUrl: './add-parking.component.html',
    styleUrls: ['./add-parking.component.scss'],
    animations: [routerTransition()]
})
export class AddParkingComponent implements OnInit {
    public name: String = "";
    public address: String = "";

    constructor(private router:Router, private serviceRestParking: ServiceRestParking) {}

    ngOnInit() {}

    onSubmit(){
      this.serviceRestParking.addParking({"name": this.name, "address": this.address}).subscribe(
        success => this.router.navigate(["/parkings"])
      );
    }
}
