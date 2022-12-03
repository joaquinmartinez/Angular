import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BohemianProductsComponent } from './bohemian-products.component';

describe('BohemianProductsComponent', () => {
  let component: BohemianProductsComponent;
  let fixture: ComponentFixture<BohemianProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BohemianProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BohemianProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
