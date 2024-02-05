import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskfourComponent } from './taskfour.component';

describe('TaskfourComponent', () => {
  let component: TaskfourComponent;
  let fixture: ComponentFixture<TaskfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskfourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
