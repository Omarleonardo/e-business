import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditcardsService } from 'src/app/services/creditcards/creditcards.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  creditcardForm: FormGroup;


  listCards: any[] = [
    {cupo: '2.000.000', 
    numeroTarjeta: '5648120900321287',
    fechaExpiracion: '12/24',
    cvv: '017' }
  ];

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService){ 
    this.form = this.fb.group({

      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      cupo: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(4)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
}

  ngOnInit(): void {
      
  }

  addTarjeta(){
    console.log(this.form);
    const tarjeta: any = {
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      cupo: this.form.get('cupo')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listCards.push(tarjeta);
    this.toastr.success('La tarjeta fue registrada con éxito!', 'tarjeta Registrada');
    this.form.reset();
  }

  eliminarTarjeta(index: number){
    this.listCards.splice(index, 1);
    this.toastr.error('La tarjeta fue eliminada de tus servicios','Tarjeta eliminada')
  }

}
