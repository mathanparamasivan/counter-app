import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-value-display',
  standalone: true,
  templateUrl: './value-display.component.html',
  styleUrls: ['./value-display.component.css']
})
export class ValueDisplayComponent {
  @Input() counter: number = 0; // ✅ Receive counter value from parent
}
