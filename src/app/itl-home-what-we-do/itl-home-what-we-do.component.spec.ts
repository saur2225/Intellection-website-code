import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlHomeWhatWeDoComponent } from './itl-home-what-we-do.component';

describe('ItlHomeWhatWeDoComponent', () => {
  let component: ItlHomeWhatWeDoComponent;
  let fixture: ComponentFixture<ItlHomeWhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlHomeWhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlHomeWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
