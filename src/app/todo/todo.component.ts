import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
 export class TodoComponent implements OnInit {

 name = '';

 onEnter(name: string): void
 {
  console.log(this.name),
    this.name = name;
   }

 ngOnInit(): void {

  }

}
