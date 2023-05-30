import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlSocialComponent } from './itl-social.component';

describe('ItlSocialComponent', () => {
  let component: ItlSocialComponent;
  let fixture: ComponentFixture<ItlSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
