import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongresComponent } from './congres.component';

describe('CongresComponent', () => {
  let component: CongresComponent;
  let fixture: ComponentFixture<CongresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
