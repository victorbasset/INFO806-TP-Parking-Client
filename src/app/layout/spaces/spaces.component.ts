import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceRestParking } from '../../../service/service.rest.parking';

@Component({
    selector: 'app-spaces',
    templateUrl: './spaces.component.html',
    styleUrls: ['./spaces.component.scss'],
    animations: [routerTransition()]
})
export class SpacesComponent implements OnInit {

  id:number = this.activeRoute.snapshot.params['id'];
  public parking:any;

  constructor(private router:Router, private activeRoute: ActivatedRoute, private serviceRestParking: ServiceRestParking) {}

  ngOnInit() {
    this.serviceRestParking.getParking(this.id).subscribe(data => this.parking = data);
  }
}
