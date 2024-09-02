import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CardComponent } from './app/components/card/card.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ApiKeyInterceptor } from './app/api-key.interceptor';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(CardComponent, {
    providers: [
      provideHttpClient(),
      { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }
    ]
  }).catch(err => console.error(err));
