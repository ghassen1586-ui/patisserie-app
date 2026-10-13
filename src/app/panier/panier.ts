import { Component,inject } from '@angular/core';
import { Cart } from '../cart';
import { cInfo } from '../Shared/cinfo';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  corns: cInfo[] =[]
  cartservice: Cart= inject (Cart);
  productlist: number[] = [];

  constructor(){
      this.corns=this.cartservice.panierlist;
      this.productlist=this.cartservice.cartIds;
    }


}
