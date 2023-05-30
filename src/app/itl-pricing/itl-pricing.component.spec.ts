import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlPricingComponent } from './itl-pricing.component';

describe('ItlPricingComponent', () => {
  let component: ItlPricingComponent;
  let fixture: ComponentFixture<ItlPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
