import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { SundaysComponent } from './pages/sundays/sundays.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages/sundays',
  },
  {
    path: 'pages/sundays',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    component: SundaysComponent,
  },
  {
    path: '**',
    redirectTo: 'pages/sundays',
  },
];
