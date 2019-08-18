import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  
  users:User[]=[];
  constructor() { }

  addUser(user:User):void{
    this.users.push(user);
  }

  listUsers():User[]{
    return this.users;
  }

  findByUserId(id:number):User{
    return this.users.filter(user => user.id === id)[0];
  }

  deleteUser(id:number):void{
    this.users = this.users.filter(user => user.id !== id);
  }

}
