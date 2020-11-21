import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  message:any;
  constructor(private _router:Router, private _service:AuthService) {}

  ngOnInit(){
    this._service.currentMessage.subscribe(message => this.message = message)
      console.log(this.message)
  }

  years(){
    this._router.navigate(['years'])
  }

  schools(school){

    console.log(school)
    this._service.changeMessage(school)
    this._router.navigate(['schools'])
  }

  more(){
    this._router.navigate(['home/tabs/tab1/answers'])
  }
}
