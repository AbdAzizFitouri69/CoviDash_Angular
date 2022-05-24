import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTestsComponent } from './testing-tests.component';

describe('TestingTestsComponent', () => {
  let component: TestingTestsComponent;
  let fixture: ComponentFixture<TestingTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
