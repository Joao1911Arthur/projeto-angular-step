import { Component } from '@angular/core';
import { Auth } from '../../servicos/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormularioRegistro} from '../../componentes/formulario-registro/formulario-registro';


@Component({
  selector: 'app-painel-admin',
  standalone: true,
  imports: [FormularioRegistro],
  templateUrl: './painel-admin.html',
  styleUrl: './painel-admin.css',
})
export class PainelAdmin {
  constructor(private auth: Auth) {}

  loginForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  registrar() {}
}
