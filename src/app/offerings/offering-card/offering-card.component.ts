import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'offering-card',
  templateUrl: './offering-card.component.html',
  styleUrls: ['./offering-card.component.scss']
})
export class OfferingCardComponent implements OnInit {

  @Input() cardHeader!: string;
  @Input() cardImage!: string;
  @Input() cardContent!: string;


  constructor() { }

  ngOnInit() {
  }

}
