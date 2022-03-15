import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-medicine-take',
  templateUrl: './details-medicine-take.component.html',
  styleUrls: ['./details-medicine-take.component.css']
})
export class DetailsMedicineTakeComponent implements OnInit {
///הגדרת משתנה מסוג טופס
myForm:FormGroup
  
  constructor() { }

  ngOnInit(){   
    // לשלוף רשימה של כל משמתש שנכנס של רשימה של תיזכורות פעילות
    // לגבי שעה מספר שעות לפי מספר התראות פרטי תיזכורת לכל התראה פרטי תיזכורת
    this.myForm=new FormGroup({
    //  פרמטר ראשון ערך ברירת מחדל
    //פרמטר השני בדיקות התקינות
      "namemedicine":new FormControl(null,Validators.required),
      "namepatient":new FormControl(null,Validators.required),
      "frequency":new FormControl(null,Validators.required),
      "leftdate":new FormControl(null,Validators.required),
     "remarks":new FormControl(null,Validators.required)
    })}

}
