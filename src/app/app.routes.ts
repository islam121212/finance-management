import { RegisterComponent } from './register/register.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ReportsComponent } from './components/reports/reports.component';
import { BonusManagementComponent } from './components/bonus-management/bonus-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bonus-management', component: BonusManagementComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'user-management', component: UserManagementComponent },
  ];

