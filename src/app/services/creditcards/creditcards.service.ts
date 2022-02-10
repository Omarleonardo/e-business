import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private API_SERVER ="https://creditcard-handler.herokuapp.com/cc";

  constructor(private httpClient: HttpClient) { 
    
  }
}
