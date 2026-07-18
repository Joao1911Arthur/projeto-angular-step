import { Routes } from '@angular/router';
import { AuthGuard } from './guardioes/auth-guard';
import { perfilAcessoGuard } from './guardioes/perfil-acesso-guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login').then(m => m.Login)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./pages/dashboard/dashboard').then(m => m.Dashboard),
        canActivate: [AuthGuard]
    },
    {
        path: 'painel-admin',
        loadComponent: () =>
            import('./pages/painel-admin/painel-admin').then(m => m.PainelAdmin),
        canActivate: [perfilAcessoGuard]
    },
];
