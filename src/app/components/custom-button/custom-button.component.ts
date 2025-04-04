import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true, // ✅ Mark as standalone
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() label: string = 'Click Me'; // Button Text
  @Input() type: string = 'button'; // Button Type: button, submit, reset
  @Input() color: string = 'blue'; // Button Background Color
  @Input() disabled: boolean = false;

  // Dynamic event emitter for button clicks
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
