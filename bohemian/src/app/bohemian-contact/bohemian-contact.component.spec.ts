import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BohemianContactComponent } from './bohemian-contact.component';

describe('BohemianContactComponent', () => {
  let component: BohemianContactComponent;
  let fixture: ComponentFixture<BohemianContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BohemianContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BohemianContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
