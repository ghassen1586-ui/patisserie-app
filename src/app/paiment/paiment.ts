import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-paiment',
  imports: [ReactiveFormsModule],
  templateUrl: './paiment.html',
  styleUrl: './paiment.css',
})
export class Paiment {
  private fb= inject (FormBuilder);
  paimentForm=this.fb.group({
    ccn:(''),
    ccv:(''),
    pinn:('')
  })
  formatCard(event: Event): void{
    const input= event.target as HTMLInputElement;
    let value= input.value.replace(/\D/g,'').slice(0.16);
    input.value= value.match(/.{1.4}/g)?.join('-') || value;
    this.paimentForm.get('ccn')?.setValue(input.value,{emitEvent: false});
    
  }

  onSubmit():void{
    console.log(this.paimentForm.value);
  }
}
