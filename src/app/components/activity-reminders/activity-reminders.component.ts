import { Component, OnInit } from '@angular/core';
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
  // ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = this.ELEMENT_DATA;
  ListActivityReminders: activityReminders[];


  constructor(private reminderServe: RemindersService, private userServe: UserService, private router:Router) { }

  ngOnInit(): void {
    this.reminderServe.GetActivityRemindersByGmail(this.userServe.currentuser.gmail).subscribe(x => {
      this.ListActivityReminders = x
    })
  }
  getNextTime() {
    let next_time = this.ListActivityReminders[0].NextTakingTime
    let min_difference = 0
    let currentDateTime = new Date()
    for (let activeReminder of this.ListActivityReminders) {
      let current_diff = (currentDateTime.getHours() - activeReminder.NextTakingTime.getHours())
      if (current_diff < min_difference) {
        min_difference = current_diff
        next_time = activeReminder.NextTakingTime
      }
    }
    return next_time
  }

  showDetails(activeReminder:activityReminders){
    this.reminderServe.medicineTakeDetailsForm.get("namemedicine").setValue(activeReminder.MedicineName)
    this.reminderServe.medicineTakeDetailsForm.get("namepatient").setValue(this.userServe.currentuser.fname)
    this.reminderServe.medicineTakeDetailsForm.get("frequency").setValue(this.userServe.currentuser.fname) //change
    this.reminderServe.medicineTakeDetailsForm.get("leftdate").setValue(activeReminder.LeftDays)
    this.reminderServe.medicineTakeDetailsForm.get("remarks").setValue(activeReminder.LeftDays) //change - what is remark
    this.router.navigate(["detailsMedicineTake"])
  }




}






