import {NgModule} from '@angular/core';
import {LoginModule} from './login/login.module';
import {RecoveryPasswordModule} from './recovery-password/recovery-password.module';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  imports: [
    LoginModule,
    RecoveryPasswordModule,
    AuthRoutingModule
  ],
  exports: [
    LoginModule,
    RecoveryPasswordModule,
    AuthRoutingModule
  ],
  declarations: [],
  providers: [],
})
export class AuthModule {
}
