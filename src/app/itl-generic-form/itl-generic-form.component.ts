import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'itl-generic-form',
  templateUrl: './itl-generic-form.component.html',
  styleUrls: ['./itl-generic-form.component.scss'],
  providers: [HttpService]
})
export class ItlGenericFormComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('form') form!: ElementRef;
  @ViewChild('formOverlay') formOverlay!: ElementRef;
  @ViewChild('companyName') companyName!: ElementRef;
  @ViewChild('optionalData') optionalData!: ElementRef;


  @Input() defaultForm!: boolean;
  @Input() reInitForm!: any;
  @Output() closeFrom = new EventEmitter();
  @Output() submittedForm = new EventEmitter();

  genericForm: FormGroup;
  // oathTakenSuccess: boolean = false;
  constructor(public fb: FormBuilder, private httpService: HttpService) { 
    this.genericForm = this.fb.group({
      file: [null],
      parentName: ['', [Validators.required, Validators.minLength(3)]],
      designation: ['', [Validators.required, Validators.minLength(3)]],
      companyName: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });
  }

  ngOnInit() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['reInitForm']){
      this.url = this.reInitForm.file;
      this.genericForm.patchValue({'parentName': this.reInitForm.parentName});
      this.genericForm.patchValue({'designation': this.reInitForm.designation});
      this.genericForm.patchValue({'companyName': this.reInitForm.companyName});
      this.genericForm.patchValue({'email': this.reInitForm.email});
      this.genericForm.patchValue({'phoneNumber': this.reInitForm.phoneNumber});
      this.makeFocus();
    }
  }
  ngAfterViewInit(): void {
    this.form.nativeElement.style.top = (window.pageYOffset-(this.defaultForm ? -50 : 300)) > 0 ? window.pageYOffset-(this.defaultForm ? -50  : 300) +'px': 0 +'px'; 
    this.formOverlay.nativeElement.style.top = window.pageYOffset-500+'px';
    window.scrollTo(0, window.pageYOffset-350)
  }

  url:any = '';
  onSelectFile(event:any) {
    if(event){
        const file = (event.target).files[0];
        this.genericForm.patchValue({
          file: file,
        });
        this.genericForm.get('avatar')?.updateValueAndValidity();
    }

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  submitOath(){
    let formData: any = new FormData();
    formData.append('parentName', this.genericForm.get('parentName')?.value);
    formData.append('file', this.genericForm.get('file')?.value);
    formData.append('designation', this.genericForm.get('designation')?.value);
    formData.append('companyName', this.genericForm.get('companyName')?.value);
    formData.append('email', this.genericForm.get('email')?.value);
    formData.append('phoneNumber', this.genericForm.get('phoneNumber')?.value);

    this.submittedForm.emit(formData);
  }

  public delete(){
    this.url = null;
  }

  makeFocus(){
    this.companyName.nativeElement.focus();
    this.optionalData.nativeElement.style.top = '5px';
    this.optionalData.nativeElement.style.color = '#3D5CFF';
  }
}
