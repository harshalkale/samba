import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  passwordsGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl('')
    });

    this.passwordsGroup = new FormGroup(
      {
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      this.passwordMatch
    );
    this.signupForm = new FormGroup({
      name: new FormGroup({
        first: new FormControl('', [Validators.required]),
        last: new FormControl('', [Validators.required])
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      passwords: this.passwordsGroup
    });
  }

  passwordMatch(group: FormGroup) {
    return group.get('password').value === group.get('confirmPassword').value
      ? null
      : { passwordMismatch: true };
  }

  login() {}

  forgotPassword() {}

  signup() {}
}
