import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlHeaderComponent } from './itl-header.component';

describe('ItlHeaderComponent', () => {
  let component: ItlHeaderComponent;
  let fixture: ComponentFixture<ItlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
