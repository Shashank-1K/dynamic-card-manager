import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http'; // Import this

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient() // Add this to the providers array
  ]
};