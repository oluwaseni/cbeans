import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.page.html',
  styleUrls: ['./schools.page.scss'],
})
export class SchoolsPage implements OnInit {

  constructor(private _router:Router, private _service:AuthService) { }

  parents = [];
  cat: any;
  detail: any =[];
  subject: any;
  expanded = {}
  message: any;
  notFOund = false
  spin = true

  ngOnInit() {
    
    this.change()
    this.getTheYears()

  }

  // question(){
  //   this._router.navigate(['questions'])
  // }

  filters(data){
    return data.filter((value, index)=> data.indexOf(value) === index);
    }

  getTheYears(year?){

    let endpoint = this._service.getTheSchools(this.message)
    if(year){
      endpoint = this._service.getTheSchoolsYears(this.message, year)
    }

    endpoint.subscribe( res =>{
      this.detail = res?.putmes;
      console.log(this.detail)
      
      const subjects = res?.filtered

      const newArray = [] 
      const newYear = [] 
      for (const datum of res?.filtered) {
        let toPush = null;
        let toYear = null;
        if (datum.subject) toPush = datum.subject;
        newArray.push(toPush);
        if (datum.year) toYear = datum.year;
        newYear.push(toYear);
      }
      console.log(this.filters(newArray))
      console.log(this.filters(newYear))
      this.cat = this.detail.year
      if(this.detail.length< 1){
        this.notFOund = true
      }
      this.spin = false
      // console.log(this.cat)
    })
  }

  getQuestion(id){
    this._router.navigate(['putme/'+id]);
    // console.log(id)
  }

  change() {
    this._service.currentMessage.
      subscribe(message => {
      this.message = message,
        console.log(this.message)
      }

      )
  }

  // newArr = []
  // this.formulalist.forEach((item, index) => {
  //     if (this.newArr.findIndex(i => i.Value == item.Value) === -1) 
  //     {
  //         this.newArr.push(item)
  //     }
  
  // });
  // this.formulalist = this.newArr

  result:any=[];
  removeDuplicates(): any{
     this.detail.forEach((item)=>{
          if(this.result.indexOf(item) < 0) {
              this.result.push(item);
          }
     });
  return this.result;
  } 
}
