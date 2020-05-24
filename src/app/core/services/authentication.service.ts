import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() {
  }

  public get hasLoggedUser(): boolean {
    try {
      return localStorage.getItem('authentication') !== null;
    } catch (e) {
      return false;
    }
  }

}
