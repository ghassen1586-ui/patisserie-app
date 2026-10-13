import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import{cInfo} from '../../../Shared/cinfo';
@Injectable({
  providedIn: 'root',
})



@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  protected corns:cInfo[]=[
      {id:1, link: "cornG/1G.png", name: "mushroom fireball", comment: "Start WW3 with the iconic mushroom fireball explosion. 12 pieces, so you and your loved ones can enjoy the view.", price: 120, pieces: 20},
      {id:2, link:"cornG/2G.png", name: "Shockwave", comment: "WARNING: Shockwave of heat heading your way at the speed of light. Embrace the vibe with 26 pieces of our volcano-red sweets.", price: 350, pieces: 26},
      {id:3, link:"cornG/3G.png", name: "Initial Radiation", comment: "You felt that? Goosebumps all over. Electric Zephyr in your bones. Surrender to 69 pieces of gamma rays sweets.", price: 799, pieces: 20},
      {id:4, link:"cornG/4G.png", name: "Nuclear Winter", comment: "420 pieces, each with 1000 calories, made with Hammam Ghazez honey so they never expire. While listening to Whispering Radioactive Rain, Survive decades of nuclear winter with your best treat.", price: 4000, pieces: 20}

    ];

  cartIds: number[] = [];
  panierlist: cInfo[]=[];
  getcorns(): cInfo[]{
    return this.corns;
  }
  getcornsId(id:number): cInfo | undefined{
    return this.corns.find(corns=>corns.id===id);
  }
  
  constructor(){
    this.cartIds = new Array(this.corns.length).fill(0);
  }
  
  AddToPanier(id:number, link: String, name: String, comment: String, price: number, pieces: number){
    this.cartIds[id-1]++;
    for (let item of this.panierlist) {
      if(item.id===id){
        return;
      }
    }
    this.panierlist.push({id, link, name, comment, price, pieces});
  }

}
