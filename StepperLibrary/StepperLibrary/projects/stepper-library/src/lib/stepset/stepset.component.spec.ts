import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsetComponent } from './stepset.component';

describe('StepsetComponent', () => {
  let component: StepsetComponent;
  let fixture: ComponentFixture<StepsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
