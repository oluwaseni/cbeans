import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  user: any;
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  first: any;
  second: any;
  third: any;

  constructor(public router: Router, private _service:AuthService) {

  }
  ngAfterViewInit() {
    // this.barChartMethod();
    // this.doughnutChartMethod();
    this.lineChartMethod();
    
    
  }

  ngOnInit(){
    this.getMe()
  }

  logout() {
    sessionStorage.removeItem('token');
    // nav to another page, just push the page to the `nav stack`, please read the link about the NavController for more details.
    this.router.navigate(['login']) //.push(LoginPage);
  }
  getMe(){    
    this._service.getUser().subscribe(res =>{
      
     this.user = res
     this.first = this.user?.lastThree[0];
     this.second = this.user?.lastThree[1];
     this.third = this.user?.lastThree[2];
    });
  } 

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
          label: '# of Votes',
          data: [200, 50, 30, 15, 20, 34],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  // doughnutChartMethod() {
  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
  //     type: 'pie',
  //     data: {
  //       labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [50, 29, 15, 10, 7],
  //         backgroundColor: [
  //           'rgba(255, 159, 64,)',
  //           'rgba(255, 99, 132)',
  //           'rgba(54, 162, 235)',
  //           'rgba(255, 206, 86)',
  //           'rgba(75, 192, 192)'
  //         ],
  //         hoverBackgroundColor: [
  //           '#FFCE56',
  //           '#FF6384',
  //           '#36A2EB',
  //           '#FFCE56',
  //           '#FF6384'
  //         ]
  //       }]
  //     }
  //   });
  // }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: [ '1st', '2nd', '3rd'],
        datasets: [
          {
            label: 'Progress',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192)',
            borderColor: '#e75f11',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#e75f11',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#10043b',
            pointHoverBorderColor: '#10043b',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [this.first, this.second, this.third],
            spanGaps: false,
          }
        ]
      }
    });
  }


}
