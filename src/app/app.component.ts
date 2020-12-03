
import { FormsModule } from '@angular/Forms';

import { Component } from '@angular/core';
import { never } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'program1';
 formData = {
   name: '' ,
   salary: '',
   department: ''
 }

     userlist = [];

     setval(array: FormData)
{
       console.log(this.formData);
       this.userlist.push(this.formData);
       this.formData = [];
  }
  ondelete(deleteme){
        this.userlist.splice(deleteme, 1)
  }

}

