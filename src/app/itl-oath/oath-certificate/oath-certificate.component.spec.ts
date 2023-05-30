import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OathCertificateComponent } from './oath-certificate.component';

describe('OathCertificateComponent', () => {
  let component: OathCertificateComponent;
  let fixture: ComponentFixture<OathCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OathCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OathCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
