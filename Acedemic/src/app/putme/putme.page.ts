import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-putme',
  templateUrl: './putme.page.html',
  styleUrls: ['./putme.page.scss'],
})
export class PutmePage implements OnInit {

  
  constructor(private activatedRoute: ActivatedRoute, private _router:Router, private _service: AuthService) { }

 
  details: any;
  user: any;
  pageSize = 1
  reference = '';
  title = '';
  completed = false

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
    this.paymentUpdate()
  }

  paymentCancel() {
    console.log('payment failed');
  }


  ngOnInit() {
    const questId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMyQuest(questId);
    this.getMe()
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

  getMe(){    
    this._service.getUser().subscribe(res =>{
      
     this.user = res
     console.log(this.user)
    });
  } 

  paymentUpdate(){
    var body ={
      fullMember : true
    }
    this._service.updatePay(body).subscribe(res =>{
      
    this.getMe()
      
    });
  }
  

  getMyQuest(id){
    
    // console.log(id)
    this._service.getQuestPutme(id).subscribe(res =>{ 
      this.details = res
      // console.log('details:', this.details);
      }
    );
  }
}