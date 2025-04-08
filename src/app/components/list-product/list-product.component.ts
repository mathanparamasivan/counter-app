import { Component, OnInit } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { Observable, fromEvent, Subject, 
  BehaviorSubject, ReplaySubject , AsyncSubject,
   of, from, interval, timer, throwError, EMPTY} from 'rxjs';
import { map, tap, pluck, scan, filter, take, delay,
   debounceTime, mergeMap, switchMap, retry, catchError,
    finalize, timeout, timestamp, defaultIfEmpty, 
    isEmpty, repeat, toArray, timeInterval, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list-product',
  imports: [CustomButtonComponent, CommonModule],
  standalone: true,
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  products$!: Observable<Product[]>;
  productList:Product[] = [];
  private destroy$ = new Subject<void>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
  }

  getProducts(){
      //this.observableSamples();
     //this.operatorSamples();
     //this.utilityOperators();
     this.products$.pipe(takeUntil(this.destroy$)).subscribe(products => this.productList = products);
     //console.log(this.products$);
   }

  observableSamples(){
    window.alert("test");
    
    // Cold Observable - emitted only when subscribed
    const coldObservable = new Observable(observer =>{
      console.log("cold observer started");
      observer.next(Math.random());
    })

    coldObservable.subscribe(val=>console.log('Cold Subscriber1: ' , val));
    coldObservable.subscribe(val=>console.log('Cold Subscriber2: ' , val));


    // Hot Obseravable - Already Emited. Received only when subscribed
    const hotObservable = fromEvent(document, 'click');
    hotObservable.subscribe(() => console.log('Clicked!'));


    // Subject - Both emit and subscribe
    // Publish Subject - Emits after subscription only received
    const subject = new Subject<number>();

    subject.subscribe((val1: number) => console.log('Sub Subscriber 1:', val1));
    subject.next(1);
    subject.next(2);

    subject.subscribe((val1: number) => console.log('Sub Subscriber 2:', val1));
    subject.next(3);

    // Bahavior subject - Only last 
    const behaviorSubject = new BehaviorSubject<number>(0); // initial value

    behaviorSubject.next(1);
    behaviorSubject.next(2);
    behaviorSubject.subscribe(val => console.log('Late subscriber got:', val));


    // Replay Subject - last 2 emits
    const replaySubject = new ReplaySubject<number>(2); // cache last 2 values

    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);

    replaySubject.subscribe(val => console.log('Replay sub got:', val));

    // Async Subject  -emits only on completed
    const asyncSubject = new AsyncSubject<number>();

    asyncSubject.subscribe(val => console.log('Async Sub got:', val));
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.complete(); // Only now emits "2"
  }

  operatorSamples() {
    console.log("operator samples");
    // of operator
    of(1, 2, 3).subscribe(console.log); // Output: 1, 2, 3

    // from operator
    from([10, 20, 30]).subscribe(console.log); // Output: 10, 20, 30

    // map operator - tap for logging
    of(1,2,3).pipe(tap(val => console.log("Before: " + val)),
      map(val => val*10),
      tap(val => console.log("After: " + val)),
      finalize(() => console.log("stream done"))
    ).subscribe(console.log);
    
    // pluck 
    of({name:"john", age:20}, {name:"joseph", age:25}).pipe(pluck('name')).subscribe(console.log);
    
    // scan -> similar to reduce
    of(1,2,3).pipe(scan((acc,val)=> acc + val, 0)).subscribe(console.log)

    // filter operator
    of(1,2,3,4,5).pipe(filter(val=>val%2==0)).subscribe(console.log);
    
    // take operator
    of(11,21,31,41).pipe(take(2)).subscribe(console.log);

    // merge map/flatmap
    of('A', 'B', 'C').pipe(mergeMap(val=>of(val+"1", val+"2")))
    .subscribe(console.log);
    
    // Debounce time - keyboard typing wait for 3 sec and then shoot server request
    fromEvent(document, 'click').pipe(
      debounceTime(10000),
      map(event => 'Clicked!')
    ).subscribe(console.log);

    // switch map - clears all previous event emits
    fromEvent(document, 'click').pipe(
      switchMap(() => interval(1000))
    ).subscribe(console.log);

    // emits event with gap/delay
    timer(2000).subscribe(() => console.log('After 2 seconds'));

    // Catching error
    throwError('Fail').pipe(
      catchError(err => of('Error caught'))
    ).subscribe(console.log); // Output: Fallback

    // Retry
    throwError('Fail').pipe(
      retry(3),
      catchError(err => of('Fallback'))
    ).subscribe(console.log); // Output: Fallback

  }

  utilityOperators(){
    of('Hello').pipe(
      delay(2000)
    ).subscribe(console.log);

    of('data').pipe(
      delay(2000),
      timeout(1000)
    ).subscribe(console.log, err => console.error('Timeout:', err));

    of('A', 'B').pipe(
      timestamp()
    ).subscribe(console.log);   

    EMPTY.pipe(
      defaultIfEmpty('No Data')
    ).subscribe(console.log); // Output: 'No Data'

    EMPTY.pipe(
      isEmpty()
    ).subscribe(console.log); //

    of('Hi').pipe(
      repeat(3)
    ).subscribe(console.log); // Output: Hi, Hi, Hi

    of(1, 2, 3).pipe(
      toArray()
    ).subscribe(console.log); // Output: [1, 2, 3]

    interval(1000).pipe(
      take(3),
      timeInterval()
    ).subscribe(x => console.log(x));

  }
}
