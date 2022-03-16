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
ok()
{
  Swal.fire(
    'תיזכורת נשמרה בהצלחה!',
    'You clicked the button!',
    'success'
  ).then((result)=>{ this.route.navigate(['/scannePage'])})
}
// delete()
// {
//   Swal.fire(
//     'האם ברצונך למחוק התראה?',
//     'You clicked the button!',
//     'success'
//   ).then((result)=>{this.remideserve.    )})
// }
}
