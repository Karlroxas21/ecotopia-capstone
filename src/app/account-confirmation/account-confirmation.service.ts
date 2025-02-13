import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
        providedIn: 'root'
})

export class AccountConfirmationService{

        private urlAPI = `${environment.apiUrl}confirm?emailToken=`;

        constructor(private http: HttpClient){}

        validateAccount(emailToken: any){
                return this.http.get<any>(`${this.urlAPI}${emailToken}`)
        }

}