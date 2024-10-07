import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './main-page/register/register.component';
import { AdvertismentCatComponent } from './advertisment-cat/advertisment-cat.component';

export const routes: Routes = [
    {
        path:"Home",component:MainPageComponent,
        pathMatch : 'prefix',
        children:[
            // {path:"Register",component:RegisterComponent},
    
    
    
    
    
        ]
        
    },
    {path:"Register",component:RegisterComponent},
    {path:"AdvertismentCat",component:AdvertismentCatComponent},
    {path:"**",component:MainPageComponent}
];
