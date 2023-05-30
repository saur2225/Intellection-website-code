import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlPricingCardComponent } from './itl-pricing-card.component';

describe('ItlPricingCardComponent', () => {
  let component: ItlPricingCardComponent;
  let fixture: ComponentFixture<ItlPricingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlPricingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlPricingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
