import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page';
import { HomePage } from './pages/home-page';
import { VisitPage } from './pages/visit-page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Betesda Church | A place to belong' },
  { path: 'about', component: AboutPage, title: 'Our heart | Betesda Church' },
  { path: 'visit', component: VisitPage, title: 'Plan your visit | Betesda Church' },
  { path: '**', redirectTo: '' },
];
