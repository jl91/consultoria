import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class LoginHttpService {

  constructor(private httpClient: HttpClient) {
  }

  public login(username: string, password: string): Observable<User> {
    return this.httpClient
      .get('/assets/rest/response.json')
      .pipe(map((response: any) => {
        console.log(response);
        return response as User;
      }));
  }


}
