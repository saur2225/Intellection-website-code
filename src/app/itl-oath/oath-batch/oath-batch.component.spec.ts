import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OathBatchComponent } from './oath-batch.component';

describe('OathBatchComponent', () => {
  let component: OathBatchComponent;
  let fixture: ComponentFixture<OathBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OathBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OathBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
