import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {

  content1 = "Keep tabs on your child's academic progress with ease using our academic module. Our detailed reports and graphs offer a bird's-eye view of their performance."
  content2 = "Keeping track of your child's health has never been easier! Receive real-time updates on your child's BMI and get alerts when it's time to take action."
  content3 = "Tired of flipping through old photo albums and searching for lost pictures? We make it easy to organize and cherish every special moment in your child's life, from the comfort of your phone."
  content4 = "Your child deserves recognition for their talents and hard work. Reward their participation in different activities with brownie points, allowing them to level up and receive special goodies."
  content5 = "Take an interactive approach to learning important life skills. Get hands-on training, and tips that will help your kids to become a better version of themselves."
  content6 = "Give your child the gift of emotional wellness with our product's child psychologist sessions. Our licensed professionals can help your little one build resiliency, and improve their overall mental health."
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigatToWhatwedo(){
    this.router.navigateByUrl('/what-we-do')
  }
}
