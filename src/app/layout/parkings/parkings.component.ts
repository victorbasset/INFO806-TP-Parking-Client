import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServiceRestParking } from '../../../service/service.rest.parking';
import {ServiceRestSpaceRequest} from '../../../service/service.rest.space-request';
import {ServiceRestSpace} from '../../../service/service.rest.space';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss'],
  animations: [routerTransition()]
})
export class ParkingsComponent implements OnInit {

  public parkings:any;
  public role:string = localStorage.getItem('role');

  constructor(private serviceRestParking: ServiceRestParking,private serviceRestSpaceRequest: ServiceRestSpaceRequest,private serviceRestSpace: ServiceRestSpace) {}

  ngOnInit() {
    this.serviceRestParking.allParkings().subscribe(
      data => {
        this.parkings = data;
        this.parkings.forEach(parkings => {
          this.serviceRestSpaceRequest.requestByParking(parkings["id"]).subscribe(
              data => {
                parkings.nb_requests = Object.keys(data).length;
              }
          );
          this.serviceRestSpace.findByParking(parkings["id"]).subscribe(
            data => {
              let nb_free_spaces = 0;
              let nb_reserved_spaces = 0;
              Object.values(data).forEach(spaces => {
                if(spaces.user == null)
                  nb_free_spaces++;
                else
                  nb_reserved_spaces++;
              });
              parkings.nb_free_spaces = nb_free_spaces ;
              parkings.nb_reserved_spaces = nb_reserved_spaces ;
            }
          );
        });
        console.log(this.parkings);

      }
    );


  }

  onDeleted(id) {
    const index = this.parkings.findIndex(parking => parking.id === id);
    this.parkings.splice(index, 1);
  }
}
