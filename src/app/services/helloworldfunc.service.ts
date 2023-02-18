import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responsemodel } from '../Models/responsemodel';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloworldfuncService {

  responsedata!: any;
  
  constructor(private http: HttpClient)
  { 
  }

  async callAzureFunction(){
    const url ='https://helloworld-func.azurewebsites.net/api/HelloWorld?code=GemuC3P1f9bo-A8gPECZXLgWw01GodzQu8S1oygyS7hhAzFu2CEyKA==&clientId=default';
    const response = await this.http.get(url,{responseType : 'text'});
    return response;

    // return new Promise((response: HttpResponse) => {
    //   this.http.get('https://helloworld-func.azurewebsites.net/api/HelloWorld?code=GemuC3P1f9bo-A8gPECZXLgWw01GodzQu8S1oygyS7hhAzFu2CEyKA==&clientId=default');
    // });
  }
}
