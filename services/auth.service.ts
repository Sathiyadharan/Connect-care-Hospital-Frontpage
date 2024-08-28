import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    API_BASE_DOMAIN = 'http://localhost:3000';

    constructor( private httpClient:HttpClient) {


    }


    signIn(email:string, password:string) :Observable<any> {
        let url = `${this.API_BASE_DOMAIN}/auth/signin`;
        let data = {    
            email:email,
            password:password
        }
        return this.httpClient.post<any>(url,data);
    }


    signup() {
        let url = `${this.API_BASE_DOMAIN}/auth/signup`;
        let data = {    
           
        }
        return this.httpClient.post<any>(url,data);
    }


}