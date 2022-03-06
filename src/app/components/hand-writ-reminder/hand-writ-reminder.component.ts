import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MedicineService } from 'src/app/Services/medicine.service';
import { RemindersService } from 'src/app/Services/reminders.service';

@Component({
  selector: 'app-hand-writ-reminder',
  templateUrl: './hand-writ-reminder.component.html',
  styleUrls: ['./hand-writ-reminder.component.css']
})
export class HandWritReminderComponent implements OnInit {

  save() {
    // this.WorksSere.lWorks.push(this.myForm.value)
  }
  constructor(public MedicineService: MedicineService, public remideserve: RemindersService) { }

  frequency: number = this.MedicineService.myForm.value["frequency"];
  alarmForm = {}

  ///לזכור לטפל בדריסת הנתונים
  ngOnInit(): void {
    let value = null
    for (let index = 0; index < Number(this.frequency); index++) {
      debugger;
      if (this.remideserve.alarmListDate.length != 0)
       value = this.remideserve.alarmListDate[index]
      this.alarmForm["alarm" + index] = new FormControl(value, Validators.required)
      this.alarmForm["SubjectReminder"] = new FormControl(this.remideserve.subjectemail, Validators.required)

      this.MedicineService.alarmForm = new FormGroup(this.alarmForm)
    }
  }

  debugger


}
