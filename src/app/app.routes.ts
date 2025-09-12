import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { autenticaoGuard } from './autenticao-guard';


export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'inicio/:mensagem', component: Inicio },
    { path: 'sobre', loadComponent: () => import('./paginas/sobre/sobre').then(c => c.Sobre) },
    { path: 'contato', loadComponent: () => import('./paginas/contato/contato').then(c => c.Contato) },
    { path: 'produto/:codigo', loadComponent: () => import('./paginas/produto/produto').then(c => c.Produto) },
    { path: 'retrito', loadComponent: () => import('./paginas/restrito/restrito').then(c => c.Restrito), canActivate: [autenticaoGuard] },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '**', loadComponent: () => import('./paginas/nao-encontrado/nao-encontrado').then(c => c.NaoEncontrado) }
];
