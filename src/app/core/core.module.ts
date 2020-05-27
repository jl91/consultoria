import {NgModule} from '@angular/core';
import {LoginHttpService} from './services/login-http.service';
import {AuthenticationService} from './services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {RecoveryPasswordHttpService} from './services/recovery-password-http.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    LoginHttpService,
    AuthenticationService,
    RecoveryPasswordHttpService
  ],
})
export class CoreModule {
}
