import { Component,inject } from '@angular/core';
import { Cart } from '../../cart';
import { cInfo } from '../../Shared/cinfo';
import { Auth } from '../../core/Service/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
    corns: cInfo[] =[]
    cartservice: Cart= inject (Cart);
     auth = inject(Auth);
      router = inject(Router);
    
    constructor(){
      this.corns=this.cartservice.getcorns();
      
    }
    addtopanier(id:number, link: String, name: String, comment: String, price: number, pieces: number):void{
      if (!this.auth.isUserAuthenticated()) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.cartservice.AddToPanier(id, link, name, comment, price, pieces);
  }
  }

