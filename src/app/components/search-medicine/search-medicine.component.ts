import { Component, OnInit} from '@angular/core';
import { ListMedicine } from 'src/app/classes/ListMedicine';
import { medicine } from 'src/app/classes/medicine';
import { medicinestock } from 'src/app/classes/medicinestock';
import { MedicineService } from 'src/app/Services/medicine.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css']
})
export class SearchMedicineComponent implements OnInit {
  

  constructor(public medicineService:MedicineService,public userserve:UserService) { }
  lmedicine:Array<ListMedicine>=new Array< ListMedicine>()
  
  ngOnInit(): void {
    this.lmedicine.push(new ListMedicine())
    //טעינת רשימת התרופות לפי מייל
    this.medicineService.GetMedicineListByGmail(this.userserve.currentuser.gmail).subscribe(data=>{this.lmedicine=data },err=>{console.log("err")}) 
    
  }
  }


