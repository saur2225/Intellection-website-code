import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'itl-pricing-card',
  templateUrl: './itl-pricing-card.component.html',
  styleUrls: ['./itl-pricing-card.component.scss']
})
export class ItlPricingCardComponent implements OnInit {
  @Input() pricing: any;
  constructor() { }

  ngOnInit() {
  }

}
