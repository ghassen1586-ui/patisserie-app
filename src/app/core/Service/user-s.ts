import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../../Shared/Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserS {
  url = 'https://jsonplaceholder.typicode.com/users';
  private http = inject(HttpClient);

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
