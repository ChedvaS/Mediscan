import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ListMedicine } from 'src/app/classes/ListMedicine';
import { medicine } from 'src/app/classes/medicine';
import { medicinestock } from 'src/app/classes/medicinestock';
import { MedicineService } from 'src/app/Services/medicine.service';
import { UserService } from 'src/app/Services/user.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css']
})
export class SearchMedicineComponent implements OnInit {

  constructor(public medicineService: MedicineService, public userserve: UserService, public datepipe: DatePipe) { }
  lmedicine: Array<ListMedicine> = new Array<ListMedicine>()
  mapColorsStatus :Map<string, string> = new Map<string, string>()
  ngOnInit(): void {
    this.lmedicine.push(new ListMedicine())
    this.mapColorsStatus.set("ok", "green")
    this.mapColorsStatus.set("almost_passed", "orange")
    this.mapColorsStatus.set("passed", "red")

    //טעינת רשימת התרופות לפי מייל
    this.medicineService.GetMedicineListByGmail(this.userserve.currentuser.gmail).subscribe(data => {
      let today = new Date()
      let followWeek = new Date()
      followWeek.setDate(today.getDate()+7)
      for (let medicine of data) {
        medicine.ExpiryDate = new Date(medicine.ExpiryDate)
        if (medicine.ExpiryDate > followWeek)
          medicine.status = "ok"
        else
          if (medicine.ExpiryDate > today)
            medicine.status = "almost_passed"
          else
            medicine.status = "passed"
      }
      this.lmedicine = data
    }, err => { console.log("err") })

  }
  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("contentTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  // func():string
  // {
  //   return 'a';
  // }
}




