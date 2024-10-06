import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './main-page/register/register.component';

export const routes: Routes = [
    {
        path:"Home",component:MainPageComponent,
        pathMatch : 'prefix',
        children:[
            // {path:"Register",component:RegisterComponent},
    
    
    
    
    
        ]
        
    },
    {path:"Register",component:RegisterComponent},
    {path:"**",component:MainPageComponent}
];
