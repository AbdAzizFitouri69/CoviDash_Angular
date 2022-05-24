import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictVirusContractionComponent } from './predict-virus-contraction.component';

describe('PredictVirusContractionComponent', () => {
  let component: PredictVirusContractionComponent;
  let fixture: ComponentFixture<PredictVirusContractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictVirusContractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictVirusContractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
