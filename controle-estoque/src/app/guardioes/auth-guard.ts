// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '../servicos/auth';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      console.log('Acesso permitido: usuário autenticado');
      return true;
    }
    console.log('Acesso negado: usuário não autenticado');
    alert('Acesso negado: você precisa estar logado para acessar esta página.');
    this.router.navigate(['/login']);
    return false;
  }
}
