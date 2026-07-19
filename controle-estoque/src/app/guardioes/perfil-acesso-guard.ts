import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../servicos/auth';
import { map } from 'rxjs/operators';

export const perfilAcessoGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  const token = localStorage.getItem('token');

  return authService.verificarUsuario(token).pipe(
    map((response: any) => {
      const role = response.usuario.role;

      if (!token) {
        router.navigate(['/login']);
        alert('Acesso negado: você precisa estar logado para acessar esta página.');
        return false; 
      }

      if (role === 'admin') {
        return true; 
      } else {
        router.navigate(['/login']);
        alert('Acesso negado: você não tem permissão para acessar esta página.');
        return false; 
      }
    })
  );
};