import './polyfills.ts';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Environment
import { environment } from './environments/environments';

import { AppModule } from './app/app.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
    useJit: true,
    preserveWhitespaces: true
}).catch(err => console.log(err));
