import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { InformationComponent } from './view/information/information.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"information",
        component:InformationComponent
    },
];
