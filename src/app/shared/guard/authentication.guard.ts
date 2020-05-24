import {Injectable} from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import {AuthenticationService} from '../../core/services/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthenticationGuard implements CanLoad {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  public canLoad(route: Route) {
    if (!this.authenticationService.hasLoggedUser) {
      this.router.navigate(['auth', 'login']);
      return false;
    }
    return true;
  }
}
