import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {
  todos:User[]=[];
  constructor(private userService:TodoService) { }

  ngOnInit() {
    this.todos = this.userService.listUsers();
    console.log(this.todos);
  }
  
  findById(id):User{
    return this.userService.findByUserId(id);
  }


}
