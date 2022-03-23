import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { activityReminders } from 'src/app/classes/ActivityReminders';
import { RemindersService } from 'src/app/Services/reminders.service';
import { UserService } from 'src/app/Services/user.service';

export class PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-activity-reminders',
  templateUrl: './activity-reminders.component.html',
  styleUrls: ['./activity-reminders.component.css']
})
export class ActivityRemindersComponent implements OnInit {
  
  ListActivityReminders: activityReminders[];


  constructor(private reminderServe: RemindersService, private userServe: UserService, private router: Router) { }

  ngOnInit(): void {
    this.reminderServe.GetActivityRemindersByGmail(this.userServe.currentuser.gmail).subscribe(x => {
      this.ListActivityReminders = x
    })
    if (!this.reminderServe.medicineTakeDetailsForm) {
      this.reminderServe.medicineTakeDetailsForm = new FormGroup({
        //  פרמטר ראשון ערך ברירת מחדל
        //פרמטר השני בדיקות התקינות
        "namemedicine": new FormControl(null, Validators.required),
        "namepatient": new FormControl(null, Validators.required),
        "frequency": new FormControl(null, Validators.required),
        "leftdate": new FormControl(null, Validators.required),
        "remarks": new FormControl(null, Validators.required)
      })
    }
  }
  getNextTime(activeReminder: activityReminders) {
    let first_time = new Date(activeReminder.TakingTimes[0])
    let currentDateTime = new Date()
    let min_difference = Math.abs((currentDateTime.getHours() - first_time.getHours()))
    let next_time = first_time
    for (let takingTime of activeReminder.TakingTimes) {
      takingTime = new Date(takingTime)
      let current_diff = Math.abs((currentDateTime.getHours() - takingTime.getHours()))
      if (currentDateTime.getHours() < takingTime.getHours())
        if (current_diff <= min_difference) {
          min_difference = current_diff
          next_time = takingTime
        }
    }
    return next_time
  }

  showDetails(activeReminder: activityReminders) {
    this.reminderServe.medicineTakeDetailsForm.get("namemedicine").setValue(activeReminder.MedicineName)
    this.reminderServe.medicineTakeDetailsForm.get("namepatient").setValue(this.userServe.currentuser.fname)
   this.reminderServe.medicineTakeDetailsForm.get("frequency").setValue(activeReminder.frequincy) 
    this.reminderServe.medicineTakeDetailsForm.get("leftdate").setValue(activeReminder.LeftDays)
     this.reminderServe.medicineTakeDetailsForm.get("remarks").setValue(activeReminder.comment)
    this.router.navigate(["detailsMedicineTake"])
  }




}






