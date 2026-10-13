import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Corns {
    
  getAll(): String[]{
    return[
      "public/cornG/1G.png",
      "public/cornG/2G.png",
      "public/cornG/3G.png",
      "public/cornG/4G.png"
    ]

  }
}
