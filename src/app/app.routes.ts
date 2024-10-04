import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {
        path:"Home",component:MainPageComponent,
        pathMatch : 'prefix',
        children:[
            // {path:"Test",component:TestComponent},
    
    
    
    
    
        ]
    },
    {path:"**",component:MainPageComponent}
];
