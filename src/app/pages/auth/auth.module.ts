import {NgModule} from '@angular/core';
import {LoginModule} from './login/login.module';
import {RecoveryPasswordModule} from './recovery-password/recovery-password.module';

@NgModule({
  imports: [
    LoginModule,
    RecoveryPasswordModule
  ],
  exports: [
    LoginModule,
    RecoveryPasswordModule
  ],
  declarations: [],
  providers: [],
})
export class AuthModule {
}
