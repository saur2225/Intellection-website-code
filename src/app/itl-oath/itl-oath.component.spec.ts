import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlOathComponent } from './itl-oath.component';

describe('ItlOathComponent', () => {
  let component: ItlOathComponent;
  let fixture: ComponentFixture<ItlOathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItlOathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItlOathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
