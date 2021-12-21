import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { interval, Observer, Subject, take } from 'rxjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const observer: Observer<number> = {
  next: (value) => console.log(' next :', value),
  error: (error) => console.warn('erros : ', error),
  complete: () => console.info('completado'),
};
