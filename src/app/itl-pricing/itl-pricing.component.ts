import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itl-pricing',
  templateUrl: './itl-pricing.component.html',
  styleUrls: ['./itl-pricing.component.scss']
})
export class ItlPricingComponent implements OnInit {
  pricingDetails = [
    {
      year: '1',
      profits: [
        "Academics Module",
        "Health Module",
        "Co-curricular Module",
        "Memories",
        "5 webinars",
        "2 psychological sessions"],
        perYear: 12000,
        type: 'month',
        fullPrice: 18000,
        offPrice: 6000,
        cutYear:18000,
        downOne: 1000,
        downTwo: 1500,
    },
    {
      year: '3',
      profits: [
        "Academics Module",
        "Health Module",
        "Co-curricular Module",
        "Memories",
        "15 webinars",
        "6 psychological sessions"],
        perYear: 24000,
        fullPrice: 21000,
        offPrice: 12000,
        cutYear:36000,
        downOne: 8000,
        downTwo: 12000,
    },
    {
      year: '5',
      profits: [
        "Academics Module",
        "Health Module",
        "Co-curricular Module",
        "Memories",
        "25 webinars",
        "10 psychological sessions"],
        perYear: 30000,
        fullPrice: 30000,
        offPrice: 20000,
        cutYear:50000,
        downTwo: 10000,
        downOne: 6000,
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
