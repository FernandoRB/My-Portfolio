import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ErrorComponent } from './components/error/error.component';

const appRutes:Routes = [
    {path:'AppComponent', component:AppComponent},
    {path:'HeaderComponent', component:HeaderComponent}, 
    {path:'BodyComponent', component:BodyComponent},
    {path:'**', component:ErrorComponent}

];
export const AppRoutingProviders:any[] = [];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRutes)