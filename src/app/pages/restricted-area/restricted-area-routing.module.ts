import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestrictedAreaComponent} from './restricted-area.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: RestrictedAreaComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RestrictedAreaRoutingModule {
}
