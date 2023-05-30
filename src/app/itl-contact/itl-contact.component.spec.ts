import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlContactComponent } from './itl-contact.component';

describe('ItlContactComponent', () => {
  let component: ItlContactComponent;
  let fixture: ComponentFixture<ItlContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
