import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    {path: 'error', component: ErrorPageComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'error'}
];
