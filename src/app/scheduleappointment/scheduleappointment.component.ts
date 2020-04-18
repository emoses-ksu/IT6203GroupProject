import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-scheduleapp',
  templateUrl: './scheduleappointment.component.html',
  styleUrls: ['./scheduleappointment.component.css']
})
export class ScheduleappointmentComponent implements OnInit {
  openform = false;
  homepage = false;
  tooltip = false;
  appointment: String;
  compareDate;
  public mode = 'add'; //default mode
  private id: string; //appointment ID
  formName = '<I>Counseling Appointment Request Form</I>';
  appDetails: any = {};
  dateValue = new Date;

  @Input() formData

  constructor(private _myService: AppointmentService, private fb: FormBuilder,
    private router:Router,public route: ActivatedRoute ) { }
  
  apptForm : FormGroup;
  public needCampusData = false;
  
  ngOnInit(){
    
    this.apptForm = this.fb.group({
      firstname: new FormControl('', 
      [Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern('^[a-zA-Z ]*$')]), 
      lastname: new FormControl('', 
      [Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern('^[a-zA-Z ]*$')]),
      phone: new FormControl('', 
      Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')),
      emailid: new FormControl('', [Validators.required,
      Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      ksuid: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern('^[0-9a-zA-Z ]*$')]),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      gender: new FormControl(''),
      counselingMode: new FormControl('', Validators.required),
      campus : new FormControl(''),
      appointmentType: new FormControl('', Validators.required),
      requestedService: new FormControl('', Validators.required),
      counselor: new FormControl('', Validators.required),
      additionalInformation: new FormControl('', Validators.maxLength(500)),
    }); 

    //logic to prepopulate the form data in UI for update
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'edit'; /*request had a parameter _id */ 
           this.id = paramMap.get('_id');
           this.route.params.subscribe(params => {
            this._myService.getApptDetailByID(this.id).subscribe(res => {
              this.formData = res;
              this.apptForm.patchValue(this.formData)
            });
          });
        }
          
       else {this.mode = 'add';
           this.id = null; }
     });
  }
  

  @Input() firstname: string;
  @Input() lastname: string; 
  @Input() phone: string; 
  @Input() emailid: string; 
  @Input() ksuid: string;
  @Input() date: Date; 
  @Input() time: string;
  @Input() gender: string;
  @Input() appointmentType: string;
  @Input() appointmentMethod: string; 
  @Input() requestedService: string;
  @Input() counselor: string; 
  @Input() additionalInformation: string;

  //submit call to save data to database
  onSubmit(apptForm : FormGroup) {
    if(this.checkDate(apptForm.value.date)){
    if(this.mode== 'add'){ 
        this._myService.addApptDetails(apptForm.value.firstname, apptForm.value.lastname, apptForm.value.phone, apptForm.value.emailid, 
          apptForm.value.ksuid, apptForm.value.date, apptForm.value.time, apptForm.value.gender, apptForm.value.counselingMode, apptForm.value.campus,
          apptForm.value.appointmentType, apptForm.value.requestedService, apptForm.value.counselor, 
          apptForm.value.additionalInformation)
    }    
    else if(this.mode=='edit'){
      this._myService.updateApptDetails(this.id,apptForm.value.firstname, 
        apptForm.value.lastname, apptForm.value.phone, apptForm.value.emailid, apptForm.value.ksuid, 
        apptForm.value.date, apptForm.value.time, apptForm.value.gender, apptForm.value.counselingMode,apptForm.value.campus, 
        apptForm.value.appointmentType, apptForm.value.requestedService, apptForm.value.counselor, apptForm.value.additionalInformation)        
    }
    this.router.navigate(['/viewappointment']);
    // TODO: Use EventEmitter with form value
  }
  }
  //reset function
  onReset() {
    this.apptForm.reset;
    this.appointment = null;
  }
  //validate the appointment date value
  checkDate(formDateValue: Date) {
    if (formDateValue <= this.dateValue) {
      alert("Appointment Date must be future date. Passed Date and Today can't be selected")
      return false
    }
    return true

  }


}
