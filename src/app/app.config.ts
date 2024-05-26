import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {
  associateToTargetUseCaseProvider,
  getUserProfileUseCaseProvider,
  productImplementationRepositoryProvider,
} from './features/home/data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    associateToTargetUseCaseProvider,
    getUserProfileUseCaseProvider,
    productImplementationRepositoryProvider,
  ],
};
