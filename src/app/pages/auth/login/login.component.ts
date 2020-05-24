import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginComponentService} from "./login-component.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  providers: [
    LoginComponentService
  ]
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginComponentService: LoginComponentService
  ) {
    this.initForm();
  }

  public ngOnInit() {

  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit(): void {

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const {username, password} = this.formGroup.value;
    this.loginComponentService.login(username, password);
  }

}
