import {NgModule} from '@angular/core';
import {RestrictedAreaComponent} from './restricted-area.component';
import {RouterModule} from '@angular/router';
import {RestrictedAreaRoutingModule} from './restricted-area-routing.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    RouterModule,
    RestrictedAreaRoutingModule
  ],
  exports: [
    RestrictedAreaRoutingModule
  ],
  declarations: [
    RestrictedAreaComponent,
    HomeComponent
  ],
  providers: [],
})
export class RestrictedAreaModule {
}
