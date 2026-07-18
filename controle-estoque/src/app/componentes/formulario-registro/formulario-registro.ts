import { Component } from '@angular/core';
import { Auth } from '../../servicos/auth';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css',
})
export class FormularioRegistro {
  constructor(private auth: Auth) { }

  registroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
  });

  errorMessage: string | undefined;
  nextMessage: string | undefined;

  verificarEmail() {
    const emailControl = this.registroForm.get('email');
    if (emailControl?.invalid) {
      this.errorMessage = 'E-mail inválido';
    } else {
      this.errorMessage = undefined;
    }
  }


  registrar() {
    this.auth.registrar(this.registroForm.value).subscribe({
      next: (response) => {
        console.log('Usuário registrado com sucesso!', response);
        this.nextMessage = 'Usuário registrado com sucesso!';
        this.registroForm.reset();
      },
      error: (error) => {
        console.error('Erro ao registrar usuário:', error);
        console.log(this.registroForm.value);
      }
    });
  }
}
