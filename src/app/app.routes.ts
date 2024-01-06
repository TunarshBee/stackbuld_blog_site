import { Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path:"",
        component: NavbarComponent,
        children:[{
            path:"",
            component:LandingPageComponent
        }]
    }
];
