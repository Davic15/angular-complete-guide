import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    /*this.firstObsSubscription = interval(1000).subscribe((count: number) => {
      console.log(count);
    });*/

    //* Custom Observable
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        //* To handle completion
        if (count === 2) {
          observer.complete();
        }

        //* To handle an error
        if (count > 3) {
          observer.error (new Error('Count is greater 3!.'));
        }
        count++;
      }, 1000)
    });

    //* Operators
    this.firstObsSubscription = customIntervalObservable.pipe(filter((data) => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe((data: number) => {
      console.log(data)
    }, (error) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!')
    })
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
