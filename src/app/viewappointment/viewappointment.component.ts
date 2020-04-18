import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  public appointmentDetails;
  public apptString;
  //initialize the call using AppointmentService 
  constructor(private _myService: AppointmentService,private router:Router) { }

  ngOnInit() {
    this.getAppointmentDetails();
  }
  //method called OnInit
  //To get the database data as JSON 
  getAppointmentDetails() {
   this._myService.getApptDetails().subscribe(
      //read data and assign to public variable students
      data => { this.appointmentDetails = data ;    
      },
      err => console.error(err),
      () => console.log('finished loading'),
    );
   }
   //delete the appointment details
   onDelete(apptdetailID: string) {
     if(confirm("Are you sure you want to cancel the appointment")){
    this._myService.deleteApptDetails(apptdetailID);
  }
   }
}
