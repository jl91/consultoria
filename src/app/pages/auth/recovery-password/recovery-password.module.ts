import {NgModule} from '@angular/core';

import {RecoveryPasswordComponent} from './recovery-password.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  exports: [
  ],
  declarations: [
    RecoveryPasswordComponent
  ],
  providers: [],
})
export class RecoveryPasswordModule {
}
