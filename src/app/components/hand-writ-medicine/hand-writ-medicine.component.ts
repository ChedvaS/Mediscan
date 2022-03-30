import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { medicinestock } from 'src/app/classes/medicinestock';
import { MedicineService } from 'src/app/Services/medicine.service';
import { MedicinestockService } from 'src/app/Services/medicinestock.service';
import { ReminderDetailsService } from 'src/app/Services/reminder-details.service';

@Component({
  selector: 'app-hand-writ-medicine',
  templateUrl: './hand-writ-medicine.component.html',
  styleUrls: ['./hand-writ-medicine.component.css']
})
export class HandWritMedicineComponent implements OnInit {

  constructor(public reminderdetalsServe:ReminderDetailsService,public MedicineService:MedicineService,public medicneSserve:MedicinestockService) { }

  ngOnInit() {
    
  }
 
  updetexpirydate()
  {
    
    this.medicneSserve.curentMedicineS.expiryDate=this.MedicineService.myForm.get("endDate").value
    if(this.reminderdetalsServe.IsAdd)
    this.medicneSserve.AddMedicineStock(this.medicneSserve.curentMedicineS).subscribe
    (x=>console.log("sec"),err=>console.log(err));
    else
    this.medicneSserve.updateMedicine(this.medicneSserve.curentMedicineS).subscribe
    (x=>console.log("sec"),err=>console.log(err));
  }

}
