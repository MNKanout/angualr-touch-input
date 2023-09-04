import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'touch-input';
  buttons: string[] = ['1','2','3','4','5','6','7','8','9','0'];
  selectedButton: string = '';
  serialNumber = '';

  updateSerialNumber(){
    this.serialNumber += this.selectedButton;
    this.selectedButton = '';
  }

  onClick(button: string) {
    this.selectedButton = button
    console.log(this.selectedButton + ' Clicked');
    this.updateSerialNumber();
  }

  onTouch(button: string, event:TouchEvent) {
    event.preventDefault();
    this.selectedButton = button;
    console.log(this.selectedButton + ' Touched');
    this.updateSerialNumber();
  }

  onKeyDown(event:KeyboardEvent){
    if (this.buttons.includes(event.key)){
      event.preventDefault();
      this.selectedButton = event.key;
      console.log(event.key + ' Pressed');
      this.updateSerialNumber();
    }
  }
}
