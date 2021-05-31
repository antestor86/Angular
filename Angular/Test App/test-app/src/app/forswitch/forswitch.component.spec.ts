import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForswitchComponent } from './forswitch.component';

describe('ForswitchComponent', () => {
  let component: ForswitchComponent;
  let fixture: ComponentFixture<ForswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
