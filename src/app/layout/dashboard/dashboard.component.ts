import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServiceRestSpace } from '../../../service/service.rest.space';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];
    public nb_car:number=0;
    public nb_bicycle:number=0;
    public nb_plane:number=0;
    public nb_disabled:number=0;

  constructor(private serviceRestSpace: ServiceRestSpace) {
      this.sliders.push(
          {
              imagePath: 'assets/images/car.png',
              label: 'Réserver votre place de parking !',
              text: 'Voiture'
          },
          {
              imagePath: 'assets/images/plane.jpg',
              label: 'Réserver votre place de parking !',
              text: 'Avion'
          },
      );
    }

    ngOnInit() {
      this.serviceRestSpace.allSpaces().subscribe( spaces => {
        Object.values(spaces).forEach( space => {
          if(space.user == null) {
            if (space.type == "CAR") {
              this.nb_car++;
            } else if (space.type == "PLANE") {
              this.nb_plane++;
            } else if (space.type == "BICYCLE") {
              this.nb_bicycle++;
            } else if (space.type == "CAR_DISABLED") {
              this.nb_disabled++;
            }
          }
        })
      })
    }
}
