import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiKeyInterceptor } from './services/injector.service';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { blogReducer } from '../store/post.reducer';
import { BlogEffects } from '../store/post.effects';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    provideClientHydration(withHttpTransferCacheOptions({
        includePostRequests: true
    })),
    provideHttpClient(withInterceptorsFromDi()),
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiKeyInterceptor,
        multi: true
    },
    provideStore({
        blog: blogReducer
    }),
    provideEffects([
        BlogEffects
    ]),
    provideAnimations()
]
};
