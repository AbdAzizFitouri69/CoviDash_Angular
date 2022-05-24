import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictSymptomsComponent } from './predict-symptoms.component';

describe('PredictSymptomsComponent', () => {
  let component: PredictSymptomsComponent;
  let fixture: ComponentFixture<PredictSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictSymptomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
