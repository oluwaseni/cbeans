import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  
  constructor(private _router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('viewed')){
      this._router.navigate(['login'])
    }
  }

   
  navigateToLoginPage(){
    this._router.navigate(['login'])
    localStorage.setItem('viewed','true')
  }
}
