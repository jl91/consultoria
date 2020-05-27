import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecoveryPasswordComponent} from './recovery-password.component';

const routes: Routes = [
  {
    path: 'recovery-password',
    component: RecoveryPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class RecoveryPasswordRoutingModule {
}
