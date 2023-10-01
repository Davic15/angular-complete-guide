import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featuredSeleted = new EventEmitter<string>();
  public collapsed = true;

  onSelect(feature: string) {
    this.featuredSeleted.emit(feature);
  }
}
