import { Component } from '@angular/core';

@Component({
  selector: 'app-value-display',
  standalone: true,
  templateUrl: './value-display.component.html',
  styleUrls: ['./value-display.component.css']
})
export class ValueDisplayComponent {
  counterValue: string = ''; // Variable to hold the text

  onButtonClick() {
    this.counterValue = 'Button was clicked!'; // Update text on button click
  }
}
