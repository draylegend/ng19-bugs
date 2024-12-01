import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadComponent: () => import('./dashboard.component') },
      {
        path: '',
        outlet: 'nav',
        loadComponent: () => import('./nav.component'),
      },
    ],
  },
];
