import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'itl-contact',
  templateUrl: './itl-contact.component.html',
  styleUrls: ['./itl-contact.component.scss'],
  providers: [HttpService]
})
export class ItlContactComponent implements OnInit, AfterViewInit {
  colorArray = ['#ffffff', '#FFFEEF', '#FFD9D9', '#DEE5FF', '#FFDBCF', '#DBFFDB', '#FFE2E2' ];
  @ViewChild('contact') contact!: ElementRef;
  successSubmission: boolean = false;
  contactForm = new FormGroup({
    parentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    childName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    childClass: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  });
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.Slider();
  }


  Slider() {
    const carouselSlides:any = document.querySelectorAll('.slide_new');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
  
    const activeDot =  (slide:any) => {
      let test:any = document.querySelectorAll('.dot');
        test.forEach((dot:any) => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`)?.classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides:any) {
        
        carouselSlides.forEach((slide:any, index:any) => {
          return (slide.style.transform = `translateX(${100 * (index - slides)}%)`);
        });
    };
    changeSlide(currentSlide);



setInterval(() => {
  currentSlide++; 
  this.contact.nativeElement.style.backgroundColor = currentSlide === 0 && '#ffffff';

  this.contact.nativeElement.style.backgroundColor = this.colorArray[currentSlide];
  if (carouselSlides.length - 1 < currentSlide) {
      currentSlide = 0;
  };
  changeSlide(currentSlide);
  activeDot(currentSlide);
}, 3000);


    dotsSlide?.addEventListener('click', function (e:any) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
  };

  submitContactForm(){
    this.httpService.saveContactDetails(this.contactForm.value).subscribe((data) => {
      this.successSubmission = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.successSubmission = false;
      }, 6000);
    });
  }
}
