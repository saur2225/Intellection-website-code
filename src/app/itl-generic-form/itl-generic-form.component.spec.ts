import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlGenericFormComponent } from './itl-generic-form.component';

describe('ItlGenericFormComponent', () => {
  let component: ItlGenericFormComponent;
  let fixture: ComponentFixture<ItlGenericFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlGenericFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlGenericFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
