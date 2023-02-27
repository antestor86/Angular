import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamponsComponent } from './champons.component';

describe('ChamponsComponent', () => {
  let component: ChamponsComponent;
  let fixture: ComponentFixture<ChamponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
