import { Component } from '@angular/core';
import { CustomButtonComponent } from './components/custom-button/custom-button.component'; // ✅ Import it
import { ValueDisplayComponent } from './components/value-display/value-display.component'; // Import the new component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, 
  imports: [ValueDisplayComponent, CustomButtonComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmitClick() {
    alert('Submit button clicked!');
  }

  onCancelClick() {
    alert('Cancel button clicked!');
  }

  onDeleteClick() {
    alert('Delete button clicked!');
  }
}
