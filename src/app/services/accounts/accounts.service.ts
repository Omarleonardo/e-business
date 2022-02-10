import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private API_SERVER ="https://creditcard-handler.herokuapp.com/register";

  constructor(private httpClient: HttpClient) { }

  public getAllcards(): Observable<any>{
    return this.httpClient.get(this.API_SERVER)

  }
  public getAccount(account:any): Observable<any>{
    return this.httpClient.get(this.API_SERVER, account)
  }

  public saveAccount (account:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER  , account);
  }
}
