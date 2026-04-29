
import { Routes } from '@angular/router';

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
    path: "painel-adm",
    loadComponent: () => import('./painel-adm/painel-adm').then(m => m.PainelAdm)
  }
];
          