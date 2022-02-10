import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountsService } from './services/accounts/accounts.service';
import {CreditcardsService} from './services/creditcards/creditcards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
    
  }

}
