import {Injectable} from '@angular/core';
import {Observable, of, timer} from 'rxjs';
import {User} from '../model/user.model';

@Injectable()
export class LoginHttpService {

  constructor() {
  }

  public login(username: string, password: string): Observable<User> {
    return of({
      id: 1,
      username,
      password
    });
  }


}
