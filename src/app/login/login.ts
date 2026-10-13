import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Auth } from '../core/Service/auth';

import { RouterLink, RouterLinkActive, Router } from '@angular/router';




@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {
  private fb= inject(FormBuilder);
   
  private auth = inject(Auth);        
  private router = inject(Router); 
  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.minLength(6)]],
    repeatPassword:['']
  }, { validators: this.checkPasswords }
);

  checkPasswords(group: FormGroup) {
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['repeatPassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit (): void{
    console.log(this.loginForm.value);
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email === 'semi@gmail.com' && password === '123456') {
      this.auth.isAuthenticated = true;
      this.router.navigateByUrl('/');
    }
  }
}
