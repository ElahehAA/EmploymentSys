import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginDialogComponent } from './app/login-dialog/login-dialog.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './Utility/Interceptor';
import { Provider } from '@angular/core';
import { AdvertismentCatComponent } from './app/advertisment-cat/advertisment-cat.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(LoginDialogComponent, {
    providers: [
      provideHttpClient(),
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ]
  })
