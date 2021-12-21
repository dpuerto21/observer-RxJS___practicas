import { Observable, Observer, of } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('siguiente [next] :', value),
  error: (error) => console.warn('erros : ', error),
  complete: () => console.info('complete'),
};

const obs$ = new Observable<number>((response) => {
  response.next(25);
  response.next(18);
  response.next(42);
  response.next(20);
  response.complete();
  // const a = undefined;
  response.next(13);
  response.error();
  response.next(16);
});

obs$.subscribe(observer);
// setTimeout(() => {}, 5000);

// obs$.subscribe(
//   (valor) => console.log('response-Next : ', valor),
//   (error) => console.warn('error : ', error),
//   () => console.info('completado')
// );

console.log('/////////////////');

of([3, 2, 1]).subscribe({
  next: (v) => console.log(' OF :  ...', v),
  error: (e) => console.log('error', e),
  complete: () => console.log('se completo el of'),
});
