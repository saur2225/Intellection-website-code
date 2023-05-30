import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  baseUrl = 'https://api.intellection.life/api';
  constructor(private http: HttpClient) { }

  saveContactDetails(contactDetails:any){
    return this.http.post(`${this.baseUrl}/contactUs`, contactDetails);
  }

  bookDemo(demoDetails:any){
    return this.http.post(`${this.baseUrl}/demo`, demoDetails);
  }

  takeOath(formData: any){
    return this.http.post(`${this.baseUrl}/oath`, formData)
  }

  getOathDetails() {
    return this.http.get(`${this.baseUrl}/oath`);
  }
}
