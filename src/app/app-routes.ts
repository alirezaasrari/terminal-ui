import { AuthComponent } from './Components/auth/auth.component';
import { Routes } from '@angular/router';
import { ListComponent } from './Components/list/list.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'auth', component: AuthComponent },
];
