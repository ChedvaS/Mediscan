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
    
  }

}
