import {NgModule} from '@angular/core';
import {LoginHttpService} from './services/login-http.service';
import {AuthenticationService} from './services/authentication.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    LoginHttpService,
    AuthenticationService
  ],
})
export class CoreModule {
}
