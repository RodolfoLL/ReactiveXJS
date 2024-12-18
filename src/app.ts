import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('next', value),
	error: (error) => console.warn('error', error),
	complete: () => console.info('complete'),
};

const intervalo$ = new Observable<number>((subscriber) => {
	const intervalID = setInterval(() => {
		const randomNum = Math.random();
		subscriber.next(randomNum);
	}, 2000);

	return () => {
		clearInterval(intervalID), console.log('intervalo destruido');
	};
});

/**
 * Caracteristicas importantes
 * 1.-Casteo multiple
 * 2.-Tambien es un observer
 * 3.-next,error,complete
 */
const subject$ = new Subject();
intervalo$.subscribe(subject$);
const subscription = intervalo$.subscribe(subject$)

// const subs1 = intervalo$.subscribe(observer);
// const subs2 = intervalo$.subscribe(observer);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
	subject$.next(10);
	subject$.complete();
	subscription.unsubscribe();	
}, 3000);
