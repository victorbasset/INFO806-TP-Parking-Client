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
  public spaces:any;
  public role:string = localStorage.getItem('role');

  constructor(private router:Router, private activeRoute: ActivatedRoute, private serviceRestParking: ServiceRestParking) {}

  ngOnInit() {
    this.serviceRestParking.findByParking(this.id).subscribe(data => this.spaces = data);
  }

  onDeleted(id) {
    const index = this.spaces.findIndex(space => space.id === id);
    this.spaces.splice(index, 1);
  }
}
