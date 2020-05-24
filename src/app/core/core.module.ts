import {NgModule} from '@angular/core';
import {LoginHttpService} from './services/login-http.service';
import {AuthenticationService} from './services/authentication.service';

@NgModule({
  imports: [],
  exports: [],
  providers: [
    LoginHttpService,
    AuthenticationService
  ],
})
export class CoreModule {
}
