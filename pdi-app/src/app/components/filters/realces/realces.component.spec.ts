import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealcesComponent } from './realces.component';

describe('RealcesComponent', () => {
  let component: RealcesComponent;
  let fixture: ComponentFixture<RealcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
