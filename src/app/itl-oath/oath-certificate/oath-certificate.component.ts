import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
  @Output() submitFinal = new EventEmitter();

  @ViewChild('content') content!: ElementRef;
  @ViewChild('cert') cert!: ElementRef;
  @ViewChild('certOverlay') certOverlay!: ElementRef;
  showBtns: boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.certData){
      this.showBtns = true;
    }
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        // close modal here
        this.closeCert();
      }
    })
  }

  public openPDF(parentName: string): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4', true);
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save(`${parentName}_intellection.pdf`);
    });
  }

  ngAfterViewInit(): void {
    this.certOverlay.nativeElement.style.top = 0+'px';
    window.scrollTo(0, 0)
  }
  closeCert(){
    this.closeCertificate.emit();
  }
  submitFinalOath(){
    this.showBtns = false;
    setTimeout(() =>{
      this.openPDF(this.certData.parentName);
      this.submitFinal.emit(this.certData);
    }, 500)
  }
}
