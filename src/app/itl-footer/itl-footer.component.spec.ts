import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlFooterComponent } from './itl-footer.component';

describe('ItlFooterComponent', () => {
  let component: ItlFooterComponent;
  let fixture: ComponentFixture<ItlFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
