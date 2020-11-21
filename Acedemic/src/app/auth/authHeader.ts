import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class AuthHeader implements HttpInterceptor{ 

    /**
     *
     */
    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        if(sessionStorage.getItem('token') != null){
            const clonedReq = req.clone({
                headers : req.headers.set('Authorization', 'Bearer '+sessionStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(
                tap(
                    succ =>{},
                    err =>{
                        if(err.status == 401){
                        sessionStorage.removeItem('token');
                        this.router.navigateByUrl('login');
                        }
                        else if(err.status == 403){
                        this.router.navigateByUrl('home');

                        }
                    }
                )
            )
        }
        else
        return next.handle(req.clone());
    }

}

//     intercept(request: HttpRequest<any>, next: HttpHandler){

//         console.log("Auth interceptor")
//         console.log(request.url)
//         const authToken = "token";
//         const authReq = request.clone({
//             setHeaders: {Authorization: authToken}
//         });
//         //logic

//         return next.handle(authReq)
//     }
// }