import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlButtonComponent } from './itl-button.component';

describe('ItlButtonComponent', () => {
  let component: ItlButtonComponent;
  let fixture: ComponentFixture<ItlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
