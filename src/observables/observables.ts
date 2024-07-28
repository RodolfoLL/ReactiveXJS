import {Observable, Observer} from 'rxjs';

const observer :Observer<any> = {
    next : value => console.log('next', value),
    error : error => console.warn('error', error),
    complete : () => console.info('complete')
}

const obs$ = new Observable<number>(subscriber =>{
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    
    subscriber.complete();
    subscriber.next(4);
})

obs$.subscribe(observer)