import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-hand-writ-medicine',
  templateUrl: './hand-writ-medicine.component.html',
  styleUrls: ['./hand-writ-medicine.component.css']
})
export class HandWritMedicineComponent implements OnInit {


  constructor(public MedicineService:MedicineService) { }

  ngOnInit() {
    debugger
    this.MedicineService.myForm=new FormGroup({
      //  פרמטר ראשון ערך ברירת מחדל
      //פרמטר השני בדיקות התקינות
        "nameMedicine":new FormControl(null,Validators.required),
        "namePatient":new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
        "date":new FormControl(null,[Validators.required]),
        "Minun":new FormControl(null,Validators.required),
        "numDate":new FormControl(null,Validators.required),
        "frequency":new FormControl(null,Validators.required),
        "endDate":new FormControl(null,Validators.required),
      })
    
  }

}
