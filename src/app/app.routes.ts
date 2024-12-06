import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent, 
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
        ]
    },
    { path: 'login', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'signup', redirectTo: '/auth/signup', pathMatch: 'full' },
];

