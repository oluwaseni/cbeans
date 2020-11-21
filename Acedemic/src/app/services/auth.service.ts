import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = 'https://gentle-cliffs-95363.herokuapp.com/users'
  jamb = 'https://gentle-cliffs-95363.herokuapp.com/jamb'
  putme = 'https://gentle-cliffs-95363.herokuapp.com/putme'


  constructor(private http: HttpClient) { }

  details = "Futa"
  score = 0

  // public access_token:any = JSON.parse(localStorage.getItem('currentUser')) || null ;
  // // Section to get the header
  // public httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //      'Authorization': 'Bearer ' + this.access_token
  //     })
  //   };

    private messageSource = new BehaviorSubject<any>(this.details);
    currentMessage = this.messageSource.asObservable();

    
  changeMessage(message: any){
    this.messageSource.next(message)
    console.log(message)
  }

   
  register(body: any) {
    return this.http.post(this.user + '/register', body);
}
  updatePay(body: any) {
    return this.http.patch(this.user + '/me', body);
}
  getUser() {
    return this.http.get(this.user + '/me');
}
  login(body: any) {
    return this.http.post(this.user + '/login', body);
}

  getTheYears(){
    return this.http.get<any>(this.jamb)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  getTheSchools(detail){
    return this.http.get<any>(this.putme+'?school='+detail)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  getTheSchoolsYears(detail, years){
    return this.http.get<any>(this.putme+'?school='+detail+'?year='+years)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  getQuestJamb(id){
    console.log(id)
    return this.http.get<any>(`${this.jamb}/${id}`)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getQuestPutme(id){
    console.log(id)
    return this.http.get<any>(`${this.putme}/${id}`)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
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
    return throwError(errorMessage);
 }



}

