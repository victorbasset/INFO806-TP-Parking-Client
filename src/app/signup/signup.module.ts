import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ServiceRestOauth } from '../../service/service.rest.oauth';
import { ServiceRestPublic } from '../../service/service.rest.public';
import { ServiceRestUser } from '../../service/service.rest.user';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent],
  providers: [ServiceRestOauth,ServiceRestPublic,ServiceRestUser]

})
export class SignupModule { }
