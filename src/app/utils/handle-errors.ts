import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare let toastr: any;


@Injectable()
export class HandleErrors {
    constructor(private _router: Router) {
    }        
    handleErrors(response): any {
       switch(response.status){
            case 400: {toastr.error('Valid data was given but the request has failed');}
            break;
            case 401: {toastr.error('No valid API Key was given');
            // Helpers.setLoading(true);
            // localStorage.removeItem('currentUser');
            this._router.navigate(['/login'], { queryParams: { returnUrl: this._router.routerState.snapshot.url } });
                }
            break;
            case 404: {toastr.error('The request resource could not be found');}
            break;
            case 429: {toastr.error('Too many attempts');}
            break;
            case 500: {toastr.error('Request failed due to an internal error');}
            break;
            case 503: {toastr.error('Server is offline for maintenance');}
            break;
       }
    }
}