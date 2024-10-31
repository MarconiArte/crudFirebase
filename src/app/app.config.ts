import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(
      {
        "projectId":"task-8ffac",
        "appId":"1:357340143642:web:4f5a7af8a59311c1bef1a3",
        "storageBucket":"task-8ffac.appspot.com",
        "apiKey":"AIzaSyBsg1GbPAfPn9U8oGuiR_dU67BkqEe_1wQ",
        "authDomain":"task-8ffac.firebaseapp.com",
        "messagingSenderId":"357340143642"
      }
    )), 
    provideAuth(() => getAuth()),
  ]
};
