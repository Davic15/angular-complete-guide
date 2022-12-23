import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFied = new EventEmitter<number>()
  @Input() clearReference: number;

  lastNumber = 0;
  interval = 0;

  onStartGame() {
    this.interval = +setInterval(() => {
      this.intervalFied.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  constructor() { }

  ngOnInit(): void {
  }

  onPauseGame() {
    clearInterval(this.interval)
  }

}
