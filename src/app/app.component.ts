import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message='Welcome  Karthik todo Application';
  greeting='Have a nice day!';
  timeStamp= time;
}



let time = new Date().toLocaleString();
console.log(time);
