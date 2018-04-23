import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServiceRestSpace } from '../../../service/service.rest.space';

@Component({
  selector: 'app-myspaces',
  templateUrl: './myspaces.component.html',
  styleUrls: ['./myspaces.component.scss'],
  animations: [routerTransition()]
})
export class MyspacesComponent implements OnInit {

  public userId:string = localStorage.getItem('id');
  public spaces:any = [];

  constructor(private serviceRestSpace: ServiceRestSpace) {}

  ngOnInit() {
    this.serviceRestSpace.allSpaces().subscribe( spaces => {
      Object.values(spaces).forEach(space => {
        if(space.user != null) {
          if (space.user.id == this.userId) {
            this.spaces.push(space);
          }
        }
      })
    })
  }

  onReleaseSpace(id) {
    const index = this.spaces.findIndex(space => space.id === id);
    this.spaces[index].user = null;
  }
}
