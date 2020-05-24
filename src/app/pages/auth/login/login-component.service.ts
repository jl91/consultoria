import {Injectable} from '@angular/core';
import {User} from '../../../core/model/user.model';
import {LoginHttpService} from '../../../core/services/login-http.service';
import {Router} from '@angular/router';

@Injectable()
export class LoginComponentService {

  constructor(
    private loginHttpService: LoginHttpService,
    private router: Router
  ) {
  }

  public login(username: string, password: string): void {

    const subscription = this.loginHttpService
      .login(username, password)
      .subscribe((result: User) => {

          localStorage.setItem('authentication', JSON.stringify(result));

          this.router
            .navigate(['restricted-area', 'home'])
            .then(() => {
              subscription.unsubscribe();
            });
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
