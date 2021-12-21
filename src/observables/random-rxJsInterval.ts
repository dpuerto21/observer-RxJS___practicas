import { interval, Observer, Subject, take } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log(' next :', value),
  error: (error) => console.warn('erros : ', error),
  complete: () => console.info('completado'),
};

const numRandom$ = interval(Math.random()).pipe(take(5));

const subjet$ = new Subject<number>();
numRandom$.subscribe(subjet$);

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
