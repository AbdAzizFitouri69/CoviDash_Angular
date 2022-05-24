import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathingLogoComponent } from './breathing-logo.component';

describe('BreathingLogoComponent', () => {
  let component: BreathingLogoComponent;
  let fixture: ComponentFixture<BreathingLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreathingLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
