import { Component,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-jus',
  templateUrl: './jus.html',
  imports :[ReactiveFormsModule]
  
})
export class Jus {
  private fB= inject(FormBuilder);
  myForm= this.fB.group({
    name:(''),
  })

  onSubmit(): void{
    console.log(this.myForm.value);
  }  

}
