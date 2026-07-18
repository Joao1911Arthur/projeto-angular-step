import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../servicos/auth';

@Component({
  selector: 'app-nav',
  imports: [ RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  constructor(private auth: Auth) {}

  nomeUsuario: string = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.verificarUsuario(token).subscribe((usuario: any) => {
        this.nomeUsuario = usuario.name;
      });
    }
  }

  sair() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  } 


}
