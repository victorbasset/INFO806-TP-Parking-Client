import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServiceRestParking } from '../../../service/service.rest.parking';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss'],
  animations: [routerTransition()]
})
export class ParkingsComponent implements OnInit {

  public parkings:any;
  public role:string = localStorage.getItem('role');

  constructor(private serviceRestParking: ServiceRestParking) {}

  ngOnInit() {
    this.serviceRestParking.allParkings().subscribe(
      data => this.parkings = data
    );
  }

  onDeleted(id) {
    const index = this.parkings.findIndex(parking => parking.id === id);
    this.parkings.splice(index, 1);
  }
}
