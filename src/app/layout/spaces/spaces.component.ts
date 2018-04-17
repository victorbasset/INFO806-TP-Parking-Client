import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceRestSpace } from '../../../service/service.rest.space';

@Component({
    selector: 'app-spaces',
    templateUrl: './spaces.component.html',
    styleUrls: ['./spaces.component.scss'],
    animations: [routerTransition()]
})
export class SpacesComponent implements OnInit {

  id:number = this.activeRoute.snapshot.params['id'];
  public spaces:any;

  constructor(private router:Router, private activeRoute: ActivatedRoute, private serviceRestSpace: ServiceRestSpace) {}

  ngOnInit() {
    this.serviceRestSpace.allSpaces().subscribe(data => this.spaces = data);
  }

  onDeleted(id) {
    const index = this.spaces.findIndex(space => space.id === id);
    this.spaces.splice(index, 1);
  }
}
