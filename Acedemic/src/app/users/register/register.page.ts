import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  constructor(private fb:FormBuilder, private _router:Router, private _service:AuthService) { }

  ngOnInit() {
  }

  spinner = false;
  incorrect = false;
  incorrects = false;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  formModel= this.fb.group({
    fullName: [''],
    email: ['', Validators.required],
    pins: this.fb.group({
      pin: ['', [Validators.required, Validators.minLength(4)]],
      confirmPin: ['', [Validators.required]],
    },
    {validator: this.comparePins})
   
  });



  comparePins(fb:FormGroup){
    let confirmPinCtrl = fb.get('confirmPin');

    if(confirmPinCtrl.errors == null || 'passwordMismatch' in confirmPinCtrl.errors){
      if(fb.get('pin').value != confirmPinCtrl.value){
        confirmPinCtrl.setErrors({passwordMismatch:true})
      }
      else{
        confirmPinCtrl.setErrors(null);
      }
    }
  }


  togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }
    else{
      this.passwordShown = true;
      this.passwordType = 'text'
    }
  }


  signIn(){
    this._router.navigate(['login'])
  }

  registration(){
    this.spinner = true;
    var body = {
      name: this.formModel.value.fullName,
      email: this.formModel.value.email,
      fullMember: false,
      password: this.formModel.value.pins.pin,
      lastThree: [0,0,0],
      totalScore: 0,
      totalExams: 0,
      lastExam: 0
    
    }

    console.log(body)

    this._service.register(body).subscribe(
      res =>{
        
       console.log(res)
       this.spinner = false;
       this._router.navigate(['login'])
      },
      err =>
      {
        if(err.status == 400){
          this.incorrect=true
          this.spinner = false;
        }
        else{
        
        this.incorrects=true
        console.log(err);
        this.spinner = false;
        }
      });
      
    }



    // Error handling
    errorHandl(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }

}
