import { InstructionPage } from './../instruction/instruction.page';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss'],
})
export class SheetsComponent implements OnInit {

 
  @Input('details') details: any;

  notFOund = false
  spin:boolean
  p: number = 1;
  counter = 50;
  attempted = 0;
  score = 0
  clicked = false;
  lastQuestion = false;
  user: any;
  totalScore: any;
  totalExams: any;
  lastThree: any[];
  constructor(private _router:Router, private _service: AuthService, public modalController: ModalController) { }

  ngOnInit() {

    this.presentModal()
    this.counter = 50;
    this.startCountdown(this.counter)
    this.getMe()

  }

  
  async presentModal() {
    const modal = await this.modalController.create({
      component: InstructionPage,
      cssClass: 'my-custom-class'
    });
    this.counter = 50
    return await modal.present();
  }

 
  startCountdown(seconds) {
    this.counter = seconds;
      
    const interval = setInterval(() => {
      // console.log(this.counter);
      this.counter--;
        
      if (this.counter == 0 ) {
        this.clicked = true
        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  }


  answers(num){
    alert(num)
  }

  answer(num, detail, id, i){
    
    console.log(this.clicked)
    if(this.clicked == true){
      return
      
    }
    this.clicked = true
    this.spin = true
    if(num == detail ){

      document.getElementById(id).style.color = "green"
      this.spin = false
    
      this.score += 5
      console.log(this.score)
      return document.getElementById(id).style.background= "green"
      // return alert('Passed')
    }

    document.getElementById(id).style.background="red"
    document.getElementById(id).style.color = "red"
    console.log(id)
    console.log(num + i)
    console.log(detail)
    this.spin = false
    console.log(this.score)
    setTimeout(function () {
      document.getElementById(num + i).style.color= "green"
      return document.getElementById(num + i).style.background= "green"
  }, 1000);
    // document.getElementById(num+i).style.color = "green"
    // return document.getElementById(num+i).style.background= "green"

    // alert('Failed')
    
  }

  attempt(){
    this.attempted += 1;
    this.counter = 50;
    this.clicked = false;
    if(this.attempted == 2){
      this.lastQuestion = true
    }
    console.log(this.attempted)
  }

  
  getMe(){    
    this._service.getUser().subscribe(res =>{
      
     this.user = res
     this.totalScore = this.user?.totalScore
     this.totalExams = this.user?.totalExams
     this.lastThree = this.user?.lastThree
     console.log(this.lastThree[0])// = this.user?.lastThree
     console.log(this.user)
    });
  }


  result(){
    var body ={
      lastExam : this.score, 
      totalExams: this.totalExams + 1,
      totalScore: this.totalScore + this.score,
      lastThree: [this.lastThree['1'],this.lastThree['2'], this.score]
    }
    this._service.updatePay(body).subscribe(res =>{
      
      this._router.navigate(['result', {result: this.score}])
      
    });
    
  }

    
}
