import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'touch-input';
  buttons = [1,2,3];
  clickedButton: number | string = '';

  onClick() {
    console.log(this.clickedButton);
  }
}