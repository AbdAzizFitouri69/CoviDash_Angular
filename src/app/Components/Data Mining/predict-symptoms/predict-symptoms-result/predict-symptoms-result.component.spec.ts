import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictSymptomsResultComponent } from './predict-symptoms-result.component';

describe('PredictSymptomsResultComponent', () => {
  let component: PredictSymptomsResultComponent;
  let fixture: ComponentFixture<PredictSymptomsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictSymptomsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictSymptomsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
