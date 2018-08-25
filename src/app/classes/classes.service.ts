import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { API } from '../utils/api';
import { HandleErrors } from './../utils/handle-errors';
import { Router } from '@angular/router';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ClassesService {

    constructor(private http: Http, private _router: Router,private handleErrors:HandleErrors) {

    }

    getClasses() {
        return this.http.get(`${API.classes}`, this.jwt()).map((response: Response) => response.json()).catch(err => this.check(err));
    }

    getStudents() {
        return this.http.get(`${API.students}`, this.jwt()).map((response: Response) => response.json()).catch(err => this.check(err));
    }

    getClass() {
        return this.http.get(`${API.classes}`, this.jwt()).map((response: Response) => response.json()).catch(err => this.check(err));
    }
  

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 
                // 'Authorization': 'Bearer ' + currentUser.token,
            });
            return new RequestOptions({ headers: headers });
        }
    }
    check(err) {
        if (err.status !== 422) {
        this.handleErrors.handleErrors(err);
           return;
        }else{
        return Observable.throw(err);}
    }

}
