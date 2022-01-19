import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-scanne-page',
  templateUrl: './scanne-page.component.html',
  styleUrls: ['./scanne-page.component.css']
})
export class ScannePageComponent implements OnInit {

  constructor(public router:Router,public activeRouter:ActivatedRoute,public medicineserve:MedicineService) { }
  //הגדרת משתנים
  fileToUpload: File = null;
  formData: FormData = new FormData();
  ngOnInit(){
  
  }

  
  myFunction()
  {
    this.router.navigate(["/activityReminders‏"]);
  }
//פונקציה לשמירת התמונה
upload(files: FileList)
{
  debugger
  this.fileToUpload = files.item(0);
  this.formData.append('sticker', this.fileToUpload, this.fileToUpload.name);
  this.medicineserve.saveFileInServer(this.formData).subscribe(p=>{},err=>{console.log("err")});
  //מרענן את הדף בסיום השמירה
  // window.location.reload();
}

}
