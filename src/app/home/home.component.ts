import { Component, OnInit } from '@angular/core';
import { QuestionnarieService } from '../questionnarie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  pageName = "KSU Counseling and Wellness Center";

  public questionCount = false;
  public screeningAnswers ;
  public staffListVar = false;
  //initialize the call using ScheduleappService 
  constructor(private _myService: QuestionnarieService,private router:Router) { }

  ngOnInit() {
    //this.getQuestionnarieSet();
    this.questionCount = this._myService.getQuestionarieVar()
    setTimeout(() => { this.questionCount = false; console.log("Removing"); }, 5000);
  }

  //method called OnInit
  getQuestionnarieSet() {
   this._myService.getQuestionAnswers().subscribe(
      //read data and assign to public variable students
      data => { this.screeningAnswers = data},
      err => console.error(err),
      () => console.log('finished loading') 
    );
   }
   setStaffVar(){
    this.staffListVar = true;
    setTimeout(() => { this.staffListVar = false; console.log("Removing staffdetails"); }, 8000);
   }
   getStaffVar(){
     return this.staffListVar
   }


}
