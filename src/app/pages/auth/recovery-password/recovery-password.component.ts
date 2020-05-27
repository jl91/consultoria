import {Component, OnInit} from '@angular/core';
import {RecoveryPasswordComponentService} from './recovery-password-component.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

// import template from './recovery-password.component.html';

@Component({
  selector: 'app-recovery-password',
  templateUrl: 'recovery-password.component.html',
  providers: [
    RecoveryPasswordComponentService
  ]
})
export class RecoveryPasswordComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private recoveryPasswordComponentService: RecoveryPasswordComponentService,
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]
      ]
    });
  }

  public onSubmit(event: any): void {

    if (this.formGroup.invalid) {
      return this.formGroup.markAllAsTouched();
    }

    const {email} = this.formGroup.value;

    const subscription = this.recoveryPasswordComponentService
      .recoveryPassword(email)
      .subscribe(result => {
        console.log(result); // Show something
        subscription.unsubscribe();
      });
  }

}
