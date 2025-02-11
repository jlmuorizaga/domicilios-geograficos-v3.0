import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'capturar',
    loadComponent: () => import('./pages/capturar/capturar.page').then( m => m.CapturarPage)
  },
  {
    path: 'capturar2',
    loadComponent: () => import('./pages/capturar2/capturar2.page').then( m => m.Capturar2Page)
  },
];
