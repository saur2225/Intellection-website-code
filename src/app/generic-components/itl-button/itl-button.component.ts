import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'itl-button',
  templateUrl: './itl-button.component.html',
  styleUrls: ['./itl-button.component.scss']
})
export class ItlButtonComponent implements OnInit {
  @Input() btnTxt!: string;
  @Input() btnMargin!: string; 
  @Input() disableBtn!: boolean;
  @Input() fontSizeValue!: string;
  @Input() borderRadius!: string;
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
