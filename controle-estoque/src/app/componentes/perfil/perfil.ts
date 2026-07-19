import { Component } from '@angular/core';
import { Auth } from '../../servicos/auth';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil implements OnInit {

  constructor(private auth: Auth) { }

  usuario: any = {};
  token: string | null = localStorage.getItem('token');

  ngOnInit(): void {

    const token = localStorage.getItem('token');

    if (!token) return;

    this.auth.verificarUsuario(token).subscribe({
      next: (res) => {
        this.usuario = res;

        console.log('Usuário:', this.usuario.usuario);
      },
      error: (err) => {
        console.error('Erro:', err);
      }
    });
  }

  copiarToken() {
    navigator.clipboard.writeText(this.token || '')
      .then(() => alert('Token cópiado!'))
      .catch(() => alert('Não foi possível copiar token.'));
  }

}
