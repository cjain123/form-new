import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  todoData = {
    name: '',
  };
  ngOnInit(): void {

  }

  todoList = [];

  onEnter(array: todoData): void {
    console.log(this.todoData);
    this.todoList.push(this.todoData), (this.todoData = {});
  }

  ondelete(deleteme: any): void {
    this.todoList.splice(deleteme, 1);

  }
  isedit(editme : any): void {
    this.todoList.forEach((element: any) => {
      element['isedit'] = 'false';
      editme.isedit= true;
      function element(editme:any) {
       element();
      }

    });
  }
saveelement(saveme: element): void{
  saveme.isedit = false;
}
close(closeme: element): void{
  closeme.isedit = false;
}

}
