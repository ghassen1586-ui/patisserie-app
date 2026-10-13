import { Component} from '@angular/core';
import {FormGroup, FormControl,  ReactiveFormsModule } from '@angular/forms';
import { RouterLink} from '@angular/router';


@Component({
  selector: 'app-liverison',
  templateUrl: './liverison.html',
  styleUrl: './liverison.css',
  imports: [ReactiveFormsModule, RouterLink],
 
  
  
})

export class liverison{
  liverisonform: FormGroup= new FormGroup({
    nom: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    codePostal: new FormControl(''),
    telephone: new FormControl('')

  });
    
  onSubmit(): void{
    console.log(this.liverisonform.value);
  }



};



 


