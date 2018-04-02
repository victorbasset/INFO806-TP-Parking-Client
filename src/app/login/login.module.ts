import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ServiceRestUser } from '../../service/service.rest.user';

@NgModule({
    imports: [CommonModule, LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [ServiceRestUser]
})
export class LoginModule {}
