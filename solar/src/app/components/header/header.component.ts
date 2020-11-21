import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }


  contact(){
      this._router.navigate(['app/contact'])
  }
  blog(){
      this._router.navigate(['app/blog'])
  }
  home(){
      this._router.navigate(['app/home'])
  }

}
