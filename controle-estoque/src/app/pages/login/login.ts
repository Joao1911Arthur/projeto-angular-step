import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; import { Auth } from '../../servicos/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'], // corrigido
})
export class Login {
  errorMessage: string | undefined;
  constructor(
    private auth: Auth,
    private router: Router,
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  verificarEmail() {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.invalid && emailControl?.touched) {
      this.errorMessage = 'E-mail inválido';
    } else {
      this.errorMessage = undefined;
    }
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (respostaErro: any) => {
        this.errorMessage = respostaErro.error.error;
      },
    });
  }
}
