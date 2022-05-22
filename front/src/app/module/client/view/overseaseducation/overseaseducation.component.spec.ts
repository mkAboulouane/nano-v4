import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseaseducationComponent } from './overseaseducation.component';

describe('OverseaseducationComponent', () => {
  let component: OverseaseducationComponent;
  let fixture: ComponentFixture<OverseaseducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverseaseducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverseaseducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
