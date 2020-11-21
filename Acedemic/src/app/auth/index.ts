
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeader } from './authHeader';


export const httpInterceptProviders = [
{    provide: HTTP_INTERCEPTORS, useClass: AuthHeader, multi: true
}];