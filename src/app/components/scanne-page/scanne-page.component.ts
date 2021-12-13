import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-scanne-page',
  templateUrl: './scanne-page.component.html',
  styleUrls: ['./scanne-page.component.css']
})
export class ScannePageComponent implements OnInit {

  constructor(public router:Router,public activeRouter:ActivatedRoute) { }
  //הגדרת משתנים
  fileToUpload: File = null;
  formData: FormData = new FormData();

  ngOnInit(): void {
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
  //  saveFileInServer(this.formData)
}

}
