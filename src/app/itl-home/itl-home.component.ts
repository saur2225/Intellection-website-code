import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'itl-home',
  templateUrl: './itl-home.component.html',
  styleUrls: ['./itl-home.component.css']
})
export class ItlHomeComponent implements OnInit {
  showBookForm: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
