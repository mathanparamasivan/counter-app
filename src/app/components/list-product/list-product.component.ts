import { Component } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';



@Component({
  selector: 'app-list-product',
  imports: [CustomButtonComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

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

  getProducts(){
    this.observableSamples();
  }
}
