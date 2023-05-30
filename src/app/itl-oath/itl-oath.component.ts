import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-itl-oath',
  templateUrl: './itl-oath.component.html',
  styleUrls: ['./itl-oath.component.scss'],
  providers: [HttpService]
})
export class ItlOathComponent implements OnInit {
  showOathForm: boolean = false;
  showOathCertificate: boolean = false;
  oathDetails: any;
  filledDetails: any;
  personalDetails:any;
  reInitForm: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getOathDetails().subscribe((data:any) => {
      this.oathDetails = data.data;
    })
  }
  openOathForm(){
    this.showOathForm = true;
  }
  showFilledCertificate(oathData:any){
    this.httpService.takeOath(oathData).subscribe((data) => {
      this.filledDetails = data;
      this.showOathForm = false;
      this.showOathCertificate = true;
    });
  }
  testFunc(){
    this.showOathCertificate = false;
    this.personalDetails = undefined;
  }
  managePersonalCert(oath:any){
    this.personalDetails = oath;
    this.showOathCertificate = true;
  }
  backToFormHandler(event:any){
    this.showOathCertificate = false;
    this.showOathForm = true;
    this.reInitForm = event;
  }
}
