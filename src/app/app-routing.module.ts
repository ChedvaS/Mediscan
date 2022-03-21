import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityRemindersComponent } from './components/activity-reminders/activity-reminders.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DetailsMedicineTakeComponent } from './components/details-medicine-take/details-medicine-take.component';
import { HandWritMedicineComponent } from './components/hand-writ-medicine/hand-writ-medicine.component';
import { HandWritReminderComponent } from './components/hand-writ-reminder/hand-writ-reminder.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { OpenPageComponent } from './components/open-page/open-page.component';
import { ScannePageComponent } from './components/scanne-page/scanne-page.component';
import { SearchMedicineComponent } from './components/search-medicine/search-medicine.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



const routes: Routes = [

  // {path:"logIn",component:LogInComponent,
  //   children:[
  //   {path:"signUp",component:SignUpComponent},
  //   {path:"scannePage",component:ScannePageComponent},
  // ]},

  // {path:"scannePage",component:ScannePageComponent,
  // children:[
  //   {path:"handWritMedicine1",component:HandWritMedicineComponent},
  //   {path:"searchMedicine",component:SearchMedicineComponent}
  // ]},
  {path:"open",component:OpenPageComponent},
  {path:"logIn",component:LogInComponent},
  {path:"scannePage",component:ScannePageComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"activityReminders",component:ActivityRemindersComponent},
  {path:"detailsMedicineTake",component:DetailsMedicineTakeComponent},
  {path:"handWritMedicine",component:HandWritMedicineComponent},
  {path:"handWritReminderComponent",component:HandWritReminderComponent},
  {path:"searchMedicine",component:SearchMedicineComponent},
  {path:"changepass",component:ChangePasswordComponent}



];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {}
