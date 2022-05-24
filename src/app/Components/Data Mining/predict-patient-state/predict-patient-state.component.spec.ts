import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictPatientStateComponent } from './predict-patient-state.component';

describe('PredictPatientStateComponent', () => {
  let component: PredictPatientStateComponent;
  let fixture: ComponentFixture<PredictPatientStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictPatientStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictPatientStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
