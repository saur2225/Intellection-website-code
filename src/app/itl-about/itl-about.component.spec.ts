import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlAboutComponent } from './itl-about.component';

describe('ItlAboutComponent', () => {
  let component: ItlAboutComponent;
  let fixture: ComponentFixture<ItlAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
