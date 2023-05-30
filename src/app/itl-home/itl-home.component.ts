import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'itl-home',
  templateUrl: './itl-home.component.html',
  styleUrls: ['./itl-home.component.css']
})
export class ItlHomeComponent implements OnInit {
  showBookForm: boolean = false;
  showAdvertise: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showAdvertise = true;
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    }, 2000)
  }
  closeAdvertise(){
    this.showAdvertise = false;
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
  }
}
