import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'itl-oath-certificate',
  templateUrl: './oath-certificate.component.html',
  styleUrls: ['./oath-certificate.component.scss']
})
export class OathCertificateComponent implements OnInit, AfterViewInit {
  @Input('certData') certData: any;
  @Input('checkCert') checkCert: any;
  @Output() closeCertificate = new EventEmitter();
  @Output() backToForm = new EventEmitter();
  @ViewChild('cert') cert!: ElementRef;
  @ViewChild('certOverlay') certOverlay!: ElementRef;
  constructor() { }

  ngOnInit() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        // close modal here
        this.closeCert();
      }
    })
  }
  ngAfterViewInit(): void {
    console.log(window.pageYOffset);
    
    // this.cert.nativeElement.style.top = ;
    this.certOverlay.nativeElement.style.top = 0+'px';
    window.scrollTo(0, 0)
  }
  closeCert(){
    this.closeCertificate.emit();
  }
}
