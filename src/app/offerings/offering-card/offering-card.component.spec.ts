import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingCardComponent } from './offering-card.component';

describe('OfferingCardComponent', () => {
  let component: OfferingCardComponent;
  let fixture: ComponentFixture<OfferingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
