import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent  {

  constructor(private userService:TodoService){

  }


  handleFormData(formData){
    
    let user:User = new User(formData.value.id,formData.value.name);

    this.userService.addUser(user);
    console.log(user);
    console.log(formData.value.id);
  }
}
