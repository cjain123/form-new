
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'program1';
name = 'chaitan';
surname = 'jain';
  message = '';


   formData = {
      name: '',
      age: 0,
      email: '',
      gender:''
   };

 setval(formData: any)
  {
   console.log(this.formData);
  }

}

