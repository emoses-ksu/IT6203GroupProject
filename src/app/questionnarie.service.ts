import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ 
    providedIn: 'root'
})
export class QuestionnarieService {

    public quesAccessed = false
    constructor(private http: HttpClient) { }

    // Uses http.get() to load data 
    getQuestionAnswers() {
        return this.http.get('http://localhost:8000/questionnarie');
    }
    addQuesnAnswers(question1 : string, question2: string, question3: string, question4: string, question5: string,
        question6: string, question7: string,question8: string,question9: string,question10: string,){
        this.http.post('http://localhost:8000/questionnarie', {question1,question2,question3,question4,question5,question6,question7,question8,question9,question10 })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 
        this.quesAccessed = true 
    }
    getQuestionarieVar(){
        return this.quesAccessed;
    }

}