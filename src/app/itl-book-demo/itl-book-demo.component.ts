import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'itl-book-demo',
  templateUrl: './itl-book-demo.component.html',
  styleUrls: ['./itl-book-demo.component.scss'],
  providers: [HttpService]
})
export class ItlBookDemoComponent implements OnInit {
  @ViewChild('form') form!: ElementRef;
  @ViewChild('formOverlay') formOverlay!: ElementRef;
  @Output() closeFrom = new EventEmitter();
  successDemo: boolean = false;
  
  bookDemoForm = new FormGroup({
    parentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    childName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    childClass: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),//10 digit check
    city: new FormControl('', [Validators.required, Validators.minLength(2)])
  })
  constructor(private http: HttpService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.form.nativeElement.style.top = window.pageYOffset+50+'px';
    this.formOverlay.nativeElement.style.top = window.pageYOffset-500+'px';
    window.scrollTo(0, window.pageYOffset-350)
  }

  submitDemo(){
    this.http.bookDemo(this.bookDemoForm.value).subscribe((data) => {
      this.successDemo = true;
      this.bookDemoForm.reset();
      setTimeout(() => {
        this.successDemo = false;
        this.closeFrom.emit()
      }, 8000);
    });
  }
}
