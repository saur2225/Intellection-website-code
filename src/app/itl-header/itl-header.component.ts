import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'itl-header',
  templateUrl: './itl-header.component.html',
  styleUrls: ['./itl-header.component.css']
})
export class ItlHeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('offeringsDropdown') offeringsDropdown!: ElementRef;
  @ViewChild('companyDropdown') companyDropdown!: ElementRef;

  constructor() { }

  ngOnInit() {

// Close the dropdown if the user clicks outside of it
    window.onclick = (e:any) => {
      if (!e.target.matches('.dropbtn')) {
        if (this.offeringsDropdown?.nativeElement.classList.contains('show') || this.companyDropdown.nativeElement.classList.contains('show')) {
          this.offeringsDropdown.nativeElement.classList.remove('show');
          this.companyDropdown.nativeElement.classList.remove('show');
        }
      }
    } 
  }
  openOfferings() {
    this.offeringsDropdown.nativeElement.classList.toggle("show");
  }

  openCompany(){
    this.companyDropdown.nativeElement.classList.toggle("show");
  }
  

  ngAfterViewInit(): void {
    // For Making Header Responsive
    const menu_btn = document.querySelector(".menu-btn");
    const close_btn = document.querySelector(".close-btn");
    const menu = document.querySelector(".menu");
    const drawer = menu?.querySelector(".drawer");
    const blank = menu?.querySelector(".blank");
    const body = document.querySelector("body");
    const close = () => {
    menu?.classList.remove("blur");
    drawer?.classList.remove("drawer-visible");
    body?.classList.remove("body");
    };

    menu_btn?.addEventListener("click", (e) => {
    menu?.classList.add("blur");
    drawer?.classList.add("drawer-visible");
    body?.classList.add("body");
    });

    close_btn?.addEventListener("click", (e) => {
    close();
    });

    blank?.addEventListener("click", (e) => {
    close();
    });
    if(drawer){
      Array.from(drawer.querySelectorAll("anchorone")).forEach((element) => {
      element.addEventListener("click", () => {
        close();
      });
      });
    }

  }

}
