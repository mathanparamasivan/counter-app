import { Component } from '@angular/core';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component'; // ✅ Import it
import { ValueDisplayComponent } from './components/value-display/value-display.component'; // Import the new component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, 
  imports: [ValueDisplayComponent, CounterButtonsComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }
}
