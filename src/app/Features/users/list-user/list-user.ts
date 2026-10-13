import { Component, inject } from '@angular/core';
import { User } from '../../../Shared/Models/user'; 
import { UserS } from '../../../core/Service/user-s'
@Component({
  selector: 'app-list-user',
  imports: [],
  templateUrl: './list-user.html',
  styleUrl: './list-user.css',
})
export class ListUser {

  users: User[] =[];
  private userService = inject (UserS)

  ngOnInit(): void{
    this.userService.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });

  }
}
