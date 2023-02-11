import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputgifComponent } from './inputgif.component';

describe('InputgifComponent', () => {
  let component: InputgifComponent;
  let fixture: ComponentFixture<InputgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
