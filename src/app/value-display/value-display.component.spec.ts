import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueDisplayComponent } from './value-display.component';

describe('ValueDisplayComponent', () => {
  let component: ValueDisplayComponent;
  let fixture: ComponentFixture<ValueDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
