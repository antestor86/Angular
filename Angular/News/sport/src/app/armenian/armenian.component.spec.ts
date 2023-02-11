import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmenianComponent } from './armenian.component';

describe('ArmenianComponent', () => {
  let component: ArmenianComponent;
  let fixture: ComponentFixture<ArmenianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmenianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmenianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
