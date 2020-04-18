import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title and image display
  title = 'KENNESAW STATE UNIVERSITY';
  date = new Date;
  ksuImage = '/assets/KSULogo.png/';
  imageSource = "assets/ksuimage.jpeg";
  //I declared properties to get the menu to work. 
  events;
  opened;
  closed;
  tableColumns : string [] = ['resource._id', 'rtype', 'rtitle', 'rnote', 'actions'];
}
