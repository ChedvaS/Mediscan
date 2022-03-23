import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MedicineService } from 'src/app/Services/medicine.service';
import { RemindersService } from 'src/app/Services/reminders.service';
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
  constructor(public MedicineService: MedicineService, public remideserve: RemindersService,public route:Router) { }

  frequency: number = this.MedicineService.myForm.value["frequency"];
  alarmForm = {}

  
  ngOnInit(): void {
    let value = null
    for (let index = 0; index < Number(this.frequency); index++) {
      if (this.remideserve.alarmListDate.length != 0)
       value = new Date(this.remideserve.alarmListDate[index]).toLocaleTimeString()
      this.alarmForm["alarm" + index] = new FormControl(value, Validators.required)
      this.alarmForm["SubjectReminder"] = new FormControl(this.remideserve.subjectemail, Validators.required)

      this.MedicineService.alarmForm = new FormGroup(this.alarmForm)
    }
  }
ok()
{ 
  //מתחילה את העידכון
  //לכל מחלקה ליצור כורנט ואז לשים את מה שנכנס מהפורם גרופ לכורנט ואז לפי זה לשלוח לפוניקציות עידכון ממולץ לבדוק אם היה שינוי
  Swal.fire(
    'התיזכורת נשמרה בהצלחה ,יתקבל מסרון למייל בשעת הלקיחה!',

  ).then((result)=>{
    this.MedicineService.initalizeForms()
    this.remideserve.alarmListDate = new Array<Date>()
     this.route.navigate(['/scannePage'])})
}
}
