import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { RegisterComponent } from './Views/register/register.component';

export const router: Routes =[
    {path : 'register',component : RegisterComponent},
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);