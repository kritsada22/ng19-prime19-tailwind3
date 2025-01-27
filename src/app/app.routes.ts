import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboad/dashboard.component";

export enum ROUTER_TOKENS {
  DASHBOARD = 'dashboard',
}

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: ROUTER_TOKENS.DASHBOARD,
    component: DashboardComponent,
  },
];
