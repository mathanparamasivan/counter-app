import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component'; // ✅ Import it

@Component({
  selector: 'app-counter-buttons',
  imports: [CustomButtonComponent],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})

export class CounterButtonsComponent {
  // ✅ Emit events for button clicks
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  onIncrement() {
    console.log("increment");
    this.increment.emit(); // ✅ Emit increment event
  }

  onDecrement() {
    console.log("decrement");
    this.decrement.emit(); // ✅ Emit decrement event
  }
}