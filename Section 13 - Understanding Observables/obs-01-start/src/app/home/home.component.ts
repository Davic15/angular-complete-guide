import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Subscription, interval, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    // Custom observable
    // observer is the listener
    // next emits a new value
    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Counter is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        // data handling on the stream.
        (data: Data) => {
          console.log(data);
        },
        // error handling
        (error: Error) => {
          console.log(error);
          alert(error);
        },
        // complete
        () => {
          console.log('completed');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
