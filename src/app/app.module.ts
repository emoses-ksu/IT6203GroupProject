import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';
import { NewBlogPostComponent } from './new-blog-post/new-blog-post.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatTableModule } from '@angular/material/table';
import { ListResourcesComponent } from './list-resources/list-resources.component';
import { NewResourceFormComponent } from './new-resource-form/new-resource-form.component';
import { ResourceService } from './resource.service';
import { HomeComponent } from './home/home.component';
import { ScheduleappointmentComponent } from './scheduleappointment/scheduleappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { HoursLocationsComponent } from './hours-locations/hours-locations.component';
import { PersonalitytestComponent } from './personalitytest/personalitytest.component';
import { MatButtonModule } from '@angular/material/button';
import {MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { AppointmentService } from './appointment.service';
import { QuestionnarieService } from './questionnarie.service';


const appRoutes: Routes = [ {
  path: '',                     //default component to display
   //component: ListBlogsComponent
   component: HomeComponent
 },       {
   path: 'addBlog',         //when blog added 
   component: NewBlogPostComponent
 },       {
    path: 'editBlog/:_id',         //when blog edited 
    component: NewBlogPostComponent
  },      {
   path: 'listBlogs',       //when blog listed
   component: ListBlogsComponent
  },
          {
    path: 'listResources',       
    component: ListResourcesComponent
  },
  {
    path: 'editResource/:_id',          
    component: NewResourceFormComponent
  },
  {
    path: 'addResource',         
    component: NewResourceFormComponent
  }, 
  {
    path: 'viewappointment',
    component:ViewappointmentComponent
  },
   {
     path: 'hours-locations', 
     component:HoursLocationsComponent
   },
   {
     path: 'editappointment/:_id', 
     component: ScheduleappointmentComponent
   },
   {
     path: 'personalitytest',
     component: PersonalitytestComponent
   },
   {
     path: 'scheduleappointment',
     component: ScheduleappointmentComponent
   }, 
          {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 },
 

];

@NgModule({
  declarations: [
    AppComponent,
    NewBlogPostComponent,
    NavigationMenuComponent,
    ListBlogsComponent,
    NotFoundComponent,
    ListResourcesComponent,
    NewResourceFormComponent,
    HomeComponent,
    PersonalitytestComponent,
    ScheduleappointmentComponent,
    HoursLocationsComponent,
    ViewappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogService, ResourceService,AppointmentService,QuestionnarieService],
  bootstrap: [AppComponent]
})
export class AppModule { }


