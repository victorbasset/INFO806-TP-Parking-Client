import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ServiceRestOauth } from '../../service/service.rest.oauth';
import { ServiceRestUser } from '../../service/service.rest.user';

@NgModule({
    imports: [FormsModule, LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [ServiceRestOauth,ServiceRestUser]
})
export class LoginModule {}
