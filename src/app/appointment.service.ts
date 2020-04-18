import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ 
    providedIn: 'root'
})
export class AppointmentService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data 
    getApptDetails() {
        return this.http.get('http://localhost:8000/viewappointment');  
    }

    // Uses http.post() to post data 
    addApptDetails(firstname: string, lastname: string, phone: string, 
        emailid: string, ksuid: string, date: Date, time: string, 
        gender: string, counselingMode: string,campus:string, appointmentType: string, 
        requestedService: string, counselor: string, additionalInformation: string) {
        this.http.post('http://localhost:8000/viewappointment', { firstname, lastname, 
        phone, emailid, ksuid, date,time, gender, counselingMode, campus,appointmentType, requestedService, counselor, additionalInformation })
            .subscribe((responseData) => {
                console.log(responseData);
            });
        window.alert("Your appointment is successfully scheduled") 
        window.location.replace('viewappointment');
              
    }
    deleteApptDetails(apptdetailID: string) {
        this.http.delete("http://localhost:8000/viewappointment/" + apptdetailID)
          .subscribe(() => {
              console.log('Deleted: ' + apptdetailID);
          });
          location.reload();
      }
     updateApptDetails(apptId: string, firstname: string, lastname: string, phone: string, 
        emailid: string, ksuid: string, date: Date, time: string, 
        gender: string, counselingMode: string, campus: string, appointmentType: string, 
        requestedService: string, counselor: string, additionalInformation: string) {
        this.http.put('http://localhost:8000/viewappointment/'+ apptId, { firstname, lastname, 
        phone, emailid, ksuid, date,time, gender, counselingMode,campus, appointmentType, requestedService, counselor, additionalInformation })
        .subscribe(() => {
            console.log('Updated: ' + apptId);
        });
        window.alert("Your appointment details are updated successfully") 
        window.location.replace('viewappointment');
      
    }

    getApptDetailByID(id : string){
        return this.http.get("http://localhost:8000/editappointment/"+id);
    }

}
