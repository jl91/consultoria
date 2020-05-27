import {NgModule} from '@angular/core';

import {RecoveryPasswordComponent} from './recovery-password.component';
import {RecoveryPasswordRoutingModule} from "./recovery-password-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RecoveryPasswordRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    RecoveryPasswordRoutingModule
  ],
  declarations: [
    RecoveryPasswordComponent
  ],
  providers: [],
})
export class RecoveryPasswordModule {
}
