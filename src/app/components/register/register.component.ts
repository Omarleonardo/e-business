import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accountForm: FormGroup;
  creditcards: any;

  constructor(
    public fb: FormBuilder,
    public accountsService: AccountsService,
    private http: AccountsService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      name : ['', Validators.required],
      lastname : ['', Validators.required],
      email : ['', Validators.email],
      password : ['', Validators.required]
    })
    
  }

  guardar():void {
    this.accountsService.saveAccount(this.accountForm.value).subscribe(resp=>{
      alert("Registro exitoso")
      this.accountForm.reset();
      this.router.navigate(["cc"]);
    },
    error=> {console.error(error)}
    
    )
  }
}
