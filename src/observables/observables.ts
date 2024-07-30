import {Observable, Observer} from 'rxjs';

//este es un observer
const observer :Observer<any> = {
    next : value => console.log('next', value),
    error : error => console.warn('error', error),
    complete : () => console.info('complete')
}

//declaramos un observable
const obs$ = new Observable<number>(subscriber =>{

    //con el metodos next hacemos que el observable emita algun valor
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    
    //cuando se llama al metodo complete ninguna emision mas sera enviada al subscriptor.
    subscriber.complete();
    //esta emision no sera recibido por el subscriptor.
    subscriber.next(4);
})

//para ver los valores emitidos de un observable debemos estar suscritos al mismo con un observer
// este es nuestro subcriber
obs$.subscribe(observer)