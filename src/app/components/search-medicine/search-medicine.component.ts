import { Component, OnInit } from '@angular/core';
import { medicine } from 'src/app/classes/medicine';
import { medicinestock } from 'src/app/classes/medicinestock';
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css']
})
export class SearchMedicineComponent implements OnInit {

  constructor(public medicineService:MedicineService, public m:medicinestock) { }
  lmedicine:Array<medicine>=new Array< medicine>()
  lmedicineStock:Array<medicinestock>=new Array< medicinestock>()
  ngOnInit(): void {
    this.lmedicine.push(new medicine(1))
    //טעינת רשימת התזכורות
    this.medicineService.GetAll().subscribe(data=>{this.lmedicine=data },err=>{console.log("err")})
    //טעינת רשימת מלאי התזכורת
    // this.lmedicineStock.push(new medicinestock(1))
    // this.
  }
  }


