import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
    public isAuthenticated= false;
    loging(){
      this.isAuthenticated= true;
    }

    logout(){
      this.isAuthenticated= false;
    }

    isUserAuthenticated(): boolean{
      return this.isAuthenticated;
    }
}
