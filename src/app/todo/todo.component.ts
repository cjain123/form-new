import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
 export class TodoComponent implements OnInit {

 todoData = {
   name : '',
 };

 todoList = [];

 onEnter(array: todoData): void{
  console.log(this.todoData);
  this.todoList.push(this.todoData),
  this.todoData = {};
 }
 ondelete(deleteme: any): void  {
  this.todoList.splice(deleteme, 1);
}


 ngOnInit(): void {

  }

}
