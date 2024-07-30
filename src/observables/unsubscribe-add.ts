import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('next', value),
	error: (error) => console.warn('error', error),
	complete: () => console.info('complete'),
};

const intervalo$ = new Observable<number>((subscriber) => {
	let count = 1;
	const interval = setInterval(() => {
		subscriber.next(count);
		count++;
	}, 1000);

    setTimeout(() => {
        subscriber.complete();
    },2500)
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

// esta es una subscripcion
const subs = intervalo$.subscribe(observer);
const subs2 =intervalo$.subscribe(observer);

//con el metodo add podemos concatnera varios observables y a la vez desusbrimir con una solo sentencia
subs.add(subs2);
setTimeout(() => {
	//cancelamos la subscripcion
	subs.unsubscribe();
    // subs2.unsubscribe();
	// const subs2 = intervalo$.subscribe(observer);
    console.log('Completado');
}, 3000);