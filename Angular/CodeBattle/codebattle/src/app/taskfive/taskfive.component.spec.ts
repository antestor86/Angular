import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskfiveComponent } from './taskfive.component';

describe('TaskfiveComponent', () => {
  let component: TaskfiveComponent;
  let fixture: ComponentFixture<TaskfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskfiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
