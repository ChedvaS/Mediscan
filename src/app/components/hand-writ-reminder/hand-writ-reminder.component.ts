import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-hand-writ-reminder',
  templateUrl: './hand-writ-reminder.component.html',
  styleUrls: ['./hand-writ-reminder.component.css']
})
export class HandWritReminderComponent implements OnInit {

  save(){
    // this.WorksSere.lWorks.push(this.myForm.value)
  }
  constructor(public MedicineService:MedicineService) { }
  
  frequency:number=this.MedicineService.myForm.value["frequency"];
  alarmForm={}
  alarmList:Array<number>=new Array<number>();

  ngOnInit(): void {
    
    for (let index = 1; index <= Number(this.frequency); index++) {
      debugger;
      this.alarmForm["alarm"+index]=new FormControl(null,Validators.required)
      this.alarmList.push(index)
    }
    this.alarmForm["SubjectReminder"]=new FormControl(null,Validators.required)
    this.MedicineService.alarmForm=new FormGroup(this.alarmForm)
    debugger
  }

}
