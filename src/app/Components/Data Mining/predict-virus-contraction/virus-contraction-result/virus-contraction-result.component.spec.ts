import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusContractionResultComponent } from './virus-contraction-result.component';

describe('VirusContractionResultComponent', () => {
  let component: VirusContractionResultComponent;
  let fixture: ComponentFixture<VirusContractionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirusContractionResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirusContractionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
