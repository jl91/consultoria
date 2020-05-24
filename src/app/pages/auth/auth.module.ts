import {NgModule} from '@angular/core';
import {LoginModule} from "./login/login.module";

@NgModule({
  imports: [
    LoginModule
  ],
  exports: [
    LoginModule
  ],
  declarations: [],
  providers: [],
})
export class AuthModule {
}
