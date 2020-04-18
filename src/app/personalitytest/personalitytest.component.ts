import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionnarieService } from '../questionnarie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalitytest',
  templateUrl: './personalitytest.component.html',
  styleUrls: ['./personalitytest.component.css']
})
export class PersonalitytestComponent implements OnInit {
  queForm : FormGroup
  testPageVar: boolean;
  constructor(private fb: FormBuilder, private _myService: QuestionnarieService, private router: Router) { }

  ngOnInit() {
    this.queForm = this.fb.group({
      question1: new FormControl('', Validators.required), 
      question2: new FormControl('', Validators.required),
      question3: new FormControl('', Validators.required),
      question4: new FormControl('', Validators.required),
      question5: new FormControl('', Validators.required),
      question6: new FormControl('', Validators.required), 
      question7: new FormControl('', Validators.required),
      question8: new FormControl('', Validators.required),
      question9: new FormControl('', Validators.required),
      question10: new FormControl('', Validators.required),
  });
}
onSubmit(queForm : FormGroup) {
  this._myService.addQuesnAnswers(queForm.value.question1, queForm.value.question2, queForm.value.question3, queForm.value.question4, 
    queForm.value.question5, queForm.value.question6, 
    queForm.value.question7,queForm.value.question8,queForm.value.question9,queForm.value.question10)
    confirm("You answers are successfully saved in our database. It will be analysed by our Counselors. Press ok to navigate to home page")
    this.router.navigate(['']);
  }
  //clicking home button check for Questionnarie
  checkQueVar(){
    this.testPageVar = this._myService.getQuestionarieVar()
    if(this.testPageVar = true && this.queForm.invalid){
      this._myService.quesAccessed = false;
    }
  }
}
