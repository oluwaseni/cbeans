import { AuthService } from './../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  // @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  
  user: any;
  doughnutChart: any;

  constructor(private _router: Router, private _service: AuthService) { }

  
  ngAfterViewInit() {
    // this.doughnutChartMethod();
    
    
  }

  ngOnInit() {
    this.getMe()
  }

  getMe(){    
    this._service.getUser().subscribe(res =>{
      
     this.user = res
     console.log(this.user)
    });
  } 

  done(){
    this._router.navigate(['home/tabs/tab2'])
  }

}
