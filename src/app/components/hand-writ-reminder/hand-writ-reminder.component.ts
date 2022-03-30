import { style } from '@angular/animations';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { reminders } from 'src/app/classes/reminders';
import { MedicineService } from 'src/app/Services/medicine.service';
import { ReminderDetailsService } from 'src/app/Services/reminder-details.service';
import { RemindersService } from 'src/app/Services/reminders.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hand-writ-reminder',
  templateUrl: './hand-writ-reminder.component.html',
  styleUrls: ['./hand-writ-reminder.component.css']
})
export class HandWritReminderComponent implements OnInit {

  save() {
    // this.WorksSere.lWorks.push(this.myForm.value)
  }
  constructor(
    public MedicineService: MedicineService,
    public remideserve: RemindersService,
    public reminderDserve: ReminderDetailsService,
    public userserve: UserService,
    public route: Router) { }
  frequency: number = this.MedicineService.myForm.value["frequency"];
  alarmForm = {}
  ngOnInit(): void {
    let value = null
    for (let index = 0; index < Number(this.frequency); index++) {
      if (this.remideserve.alarmListDate.length != 0)
        value = new Date(this.remideserve.alarmListDate[index]).toLocaleTimeString()
      else
        this.remideserve.alarmListDate.push(new Date())
      this.alarmForm["alarm" + index] = new FormControl(value, Validators.required)
      this.alarmForm["SubjectReminder"] = new FormControl(this.remideserve.subjectemail, Validators.required)
      this.MedicineService.alarmForm = new FormGroup(this.alarmForm)
    }
  }
  ok() {
    //מתחילה את העידכון
    //לכל מחלקה ליצור כורנט ואז לשים את מה שנכנס מהפורם גרופ לכורנט ואז לפי זה לשלוח לפוניקציות עידכון ממולץ לבדוק אם היה שינוי
    this.MedicineService.fillDataInCurrent()

    if (this.MedicineService.currentMedicine.id == undefined) //add
    {
      this.MedicineService.currentMedicine.userName = this.userserve.currentuser.gmail
      this.MedicineService.AddMedicine(this.MedicineService.currentMedicine).subscribe(x => console.log("sec"), err => console.log(err));
    }
    else//edit
      this.MedicineService.UpdateMedicine(this.MedicineService.currentMedicine).subscribe(x => console.log("sec"), err => console.log(err));
    if (this.reminderDserve.currentRDetail.id == undefined)
      this.reminderDserve.addReminderDetails(this.reminderDserve.currentRDetail).subscribe(x => this.reminderDserve.currentRDetail.id = x, err => console.log(err));
    else
      this.reminderDserve.updateReminderDetails(this.reminderDserve.currentRDetail).subscribe(x => console.log("sec"), err => console.log(err));

    //הוספת תזכורות
    for (let index = 0; index < Number(this.frequency); index++) {
      let currDate = this.alarmForm["alarm" + index].value
      let newReminder = new reminders(0, this.reminderDserve.currentRDetail.id, new Date(currDate))
      this.remideserve.AddReminder(newReminder).subscribe(data => {
        if (data == true)
          console.log("successfull");
        else
          console.log("unsuccessfully");


      })
    }
    this.reminderDserve.IsAdd = false


    //עדכון תזכורות - להוסיף תנאי בדיקה אם עדכון או הוספה
    let r
    this.remideserve.UpdateReminder(r).subscribe(data => {
      if (data == true)
        console.log("successfull");
      else
        console.log("unsuccessfully");
    })


    Swal.fire(
      'התיזכורת נשמרה בהצלחה ,יתקבל מסרון למייל בשעת הלקיחה!',

    ).then((result) => {
      this.MedicineService.initalizeForms()
      this.remideserve.alarmListDate = new Array<Date>()
      this.route.navigate(['/scannePage'])
    })
  }
}
