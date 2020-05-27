import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class RecoveryPasswordHttpService {

  constructor(private httpClient: HttpClient) {
  }


  public recoveryPassword(email: string): Observable<any> {
    return this.httpClient.post("your/url", {
      email
    });
  }

}
