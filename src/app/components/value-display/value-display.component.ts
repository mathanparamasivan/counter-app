import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-value-display',
  standalone: true,
  templateUrl: './value-display.component.html',
  styleUrls: ['./value-display.component.css']
})
export class ValueDisplayComponent {
  @Input() counter: number = 0;

  ngAfterViewInit(): void {
    console.log("view init done");
  }

  ngOnChanges(): void {
    console.log("change detected");
  }

  ngOnDestroy(): void {
    console.log("destroy");
  }
}
