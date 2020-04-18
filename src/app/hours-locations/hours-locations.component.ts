import { Component, OnInit } from '@angular/core';
import { QuestionnarieService } from '../questionnarie.service';

@Component({
  selector: 'app-hours-locations',
  templateUrl: './hours-locations.component.html',
  styleUrls: ['./hours-locations.component.css']
})
export class HoursLocationsComponent implements OnInit {
  testPageVar: boolean;

  constructor(private _myService: QuestionnarieService) { }

  ngOnInit(): void {
  }
  checkQueVar(){
    this.testPageVar = this._myService.getQuestionarieVar()
    if(this.testPageVar = true){
      this._myService.quesAccessed = false;
    }
  }

}
