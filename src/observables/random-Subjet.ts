import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log(' next :', value),
  error: (error) => console.warn('erros : ', error),
  complete: () => console.info('completado'),
};
3;

const intervalo$ = new Observable<number>((subscriber) => {
  const numRandom = setInterval(() => subscriber.next(Math.random()), 2000);
  // const intervalRandom = interval(Math.random());
  // const pararInterval = intervalRandom.pipe(take(5));
  // console.log(intervalRandom);
  return () => {
    clearInterval(numRandom);
    console.log('destruido el setInterval');
  };
});

const subjet$ = new Subject<number>();
intervalo$.subscribe(subjet$);

const intrervalo2$ = subjet$.subscribe(observer);

const intrervalo3$ = subjet$.subscribe(observer);

// const interval = intervalo$.subscribe(observer);
// const interval2 = intervalo$.subscribe(observer);

setTimeout(() => {
  subjet$.next(555);
  subjet$.complete();

  // subjet$.error(console.warn('Hay un EROR!!!'));
  console.log('Subjet completado');
}, 4000);
