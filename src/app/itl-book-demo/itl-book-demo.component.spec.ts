import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlBookDemoComponent } from './itl-book-demo.component';

describe('ItlBookDemoComponent', () => {
  let component: ItlBookDemoComponent;
  let fixture: ComponentFixture<ItlBookDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlBookDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlBookDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
