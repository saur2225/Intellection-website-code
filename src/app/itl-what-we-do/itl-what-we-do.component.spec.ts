import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlWhatWeDoComponent } from './itl-what-we-do.component';

describe('ItlWhatWeDoComponent', () => {
  let component: ItlWhatWeDoComponent;
  let fixture: ComponentFixture<ItlWhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlWhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
