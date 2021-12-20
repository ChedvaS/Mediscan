import { Component, OnInit } from '@angular/core';
import { medicine } from 'src/app/classes/medicine';
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css']
})
export class SearchMedicineComponent implements OnInit {

  constructor(public medicineService:MedicineService) { }
  lmedicine:Array<medicine>=new Array< medicine>()
  ngOnInit(): void {
    this.lmedicine.push(new medicine(1))
    //טעינת רשימת הבגדים
  this.medicineService.GetAll().subscribe(data=>{this.lmedicine=data },err=>{console.log("err")})
  }
  }


