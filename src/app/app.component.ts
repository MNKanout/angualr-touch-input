import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'touch-input';
  buttons = [1,2,3];
  selectedButton: number | string = '';

  onClick(button: Number) {
    this.selectedButton = Number(button)
    console.log(this.selectedButton + 'Clicked');
  }

  onTouch(button: Number, event:TouchEvent) {
    event.preventDefault();
    this.selectedButton = Number(button);
    console.log(this.selectedButton + 'Touched')
  }
}
