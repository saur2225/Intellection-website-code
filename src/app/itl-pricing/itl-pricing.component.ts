import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itl-pricing',
  templateUrl: './itl-pricing.component.html',
  styleUrls: ['./itl-pricing.component.scss']
})
export class ItlPricingComponent implements OnInit {
  pricingDetails = [
    {
      year: '3',
      profits: [
        "Academics Module",
        "Health Module",
        "Co-curricular Module",
        "Memories",
        "15/25 webinars",
        "psychological sessions"],
        perYear: 7000,
        fullPrice: 21000
    },
    {
      year: '5',
      profits: [
        "Academics Module",
        "Health Module",
        "Co-curricular Module",
        "Memories",
        "15/25 webinars",
        "psychological sessions"],
        perYear: 6000,
        fullPrice: 30000
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
