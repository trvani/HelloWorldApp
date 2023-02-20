import { Component, OnInit } from '@angular/core';
import { HelloworldfuncService } from 'src/app/services/helloworldfunc.service';
import {Observable, timer} from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  public message! :string;
   
  constructor(private helloworldservice: HelloworldfuncService) 
  {
    
  }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log.bind(window.console);
    this.callFunction();
  }

  callFunction(){
    this.helloworldservice.callAzureFunction().then(data =>{
      data.subscribe((data:string) => {
        this.message = data;
        return;
      })
    });
    
  }


  
}
