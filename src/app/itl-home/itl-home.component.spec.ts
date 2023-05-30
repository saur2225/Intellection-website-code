import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlHomeComponent } from './itl-home.component';

describe('ItlHomeComponent', () => {
  let component: ItlHomeComponent;
  let fixture: ComponentFixture<ItlHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
