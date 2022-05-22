import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitBioComponent } from './produit-bio.component';

describe('ProduitBioComponent', () => {
  let component: ProduitBioComponent;
  let fixture: ComponentFixture<ProduitBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
