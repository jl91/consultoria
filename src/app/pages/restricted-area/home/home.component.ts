import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../core/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  public onLogout(event: MouseEvent): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    this.authenticationService.logout();
    this.router.navigate(['auth', 'login']);
  }
}
