import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStateResultComponent } from './patient-state-result.component';

describe('PatientStateResultComponent', () => {
  let component: PatientStateResultComponent;
  let fixture: ComponentFixture<PatientStateResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientStateResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
