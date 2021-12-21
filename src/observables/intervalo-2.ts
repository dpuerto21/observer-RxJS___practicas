import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('siguiente [next] :', value),
  error: (error) => console.warn('erros : ', error),
  complete: () => console.info('complete'),
};

const intervalo$ = new Observable<any>((subscriber) => {
  let contador = 0;

  const setInter = setInterval(() => {
    contador = contador + 1;
    subscriber.next(contador);
    console.log(contador);
  }, 1000);

  return () => {
    clearInterval(setInter);
    console.log('se destruyeron las suscripciones');
  };
});

const intervalo1 = intervalo$.subscribe(observer);
const intervalo2 = intervalo$.subscribe(observer);
const intervalo3 = intervalo$.subscribe(observer);

// intervalo1.add(intervalo2 .add(intervalo3))

setTimeout(() => {
  intervalo1.unsubscribe();
  intervalo2.unsubscribe();
  intervalo3.unsubscribe();
}, 5000);
