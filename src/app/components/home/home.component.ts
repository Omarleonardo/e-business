import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  accountForm: FormGroup;
  creditcards: any;
  constructor(
    public fb: FormBuilder,
    public accountsService: AccountsService
  ) { }

  ngOnInit(): void {
  }

  getAccount(){
  }

}
