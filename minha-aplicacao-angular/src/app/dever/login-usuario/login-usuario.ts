import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login-usuario',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-usuario.html',
  styleUrl: './login-usuario.css',
})
export class LoginUsuario {

  mensagem = "";

  formularioLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  enviarFormulario(): void {
    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    console.log('Dados enviados:', this.formularioLogin.value);
    this.mensagem = 'Login realizado com sucesso!';
    this.formularioLogin.reset();
  }

  get email() {
    return this.formularioLogin.get('email');
  }

  get senha() {
    return this.formularioLogin.get('senha');
  }


}
