import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'itl-home-what-we-do',
  templateUrl: './itl-home-what-we-do.component.html',
  styleUrls: ['./itl-home-what-we-do.component.scss']
})
export class ItlHomeWhatWeDoComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    "use strict";
    const slides:any = document.querySelectorAll(".slide");
    slides.forEach((slide:any, indx:any) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });
    const nextSlide = document.querySelector(".btn-next");
    let curSlide = 0;
    let maxSlide = slides.length - 1;


    setInterval(() => {
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      slides.forEach((slide:any, indx:any) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    }, 3000)
}

  navigateToOfferings(){
    this.router.navigateByUrl('/offerings')
  }
}
