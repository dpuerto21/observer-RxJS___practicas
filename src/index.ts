import { Observable } from 'rxjs';

const obs$ = new Observable<string>((respuesta) => {
  respuesta.next('wenas!');
  respuesta.next('aja');
});

obs$.subscribe((resp) => console.log(resp));
