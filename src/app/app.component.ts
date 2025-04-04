import { Component } from '@angular/core';
import { CustomButtonComponent } from './components/custom-button/custom-button.component'; // ✅ Import it


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, 
  imports: [CustomButtonComponent],
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
