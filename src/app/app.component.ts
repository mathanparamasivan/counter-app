import { Component } from '@angular/core';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component'; // ✅ Import it
import { ValueDisplayComponent } from './components/value-display/value-display.component'; // Import the new component
import { ListProductComponent } from './components/list-product/list-product.component'; // Import the new component
import { HighlightDirective } from './directives/HighlightDirective'; // Import the new component
import {ReversePipe} from './pipes/ReversePipe'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, 
  imports: [ValueDisplayComponent, CounterButtonsComponent, ListProductComponent, HighlightDirective, ReversePipe],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "counter-app";
  counter = 0;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }
}
