import {Injectable} from '@angular/core';
import {RecoveryPasswordHttpService} from '../../../core/services/recovery-password-http.service';

@Injectable()
export class RecoveryPasswordComponentService {

  constructor(private recoveryPasswordHttpService: RecoveryPasswordHttpService) {
  }

  public recoveryPassword(email: string) {
    return this.recoveryPasswordHttpService
      .recoveryPassword(email);
  }

}
