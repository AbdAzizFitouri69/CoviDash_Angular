import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepcialNeedsComponent } from './sepcial-needs.component';

describe('SepcialNeedsComponent', () => {
  let component: SepcialNeedsComponent;
  let fixture: ComponentFixture<SepcialNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepcialNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepcialNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
