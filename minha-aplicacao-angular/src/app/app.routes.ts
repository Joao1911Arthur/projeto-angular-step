
import { Routes } from '@angular/router';
import { authGuard } from './aula6/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./pages/lista-produtos/lista-produtos').then(
        (m) => m.ListaProdutos
      ),
  },
  {
    path: 'produto/:id',
    loadComponent: () =>
      import('./pages/detalhe-produtos/detalhe-produtos').then(
        (m) => m.DetalheProdutos
      ),
  },
  {
    path: 'painel-adm',
    loadComponent: () =>
      import('./dever/painel-adm/painel-adm').then(
        (m) => m.PainelAdm
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'produtos',
  }
];
          