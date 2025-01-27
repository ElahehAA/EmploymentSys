import { Component, Provider } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../Utility/Interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPageComponent,
    RouterOutlet,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FindJob';
}
