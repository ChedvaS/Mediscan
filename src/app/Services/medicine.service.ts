import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medicine } from '../classes/medicine';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListMedicine } from '../classes/ListMedicine';

@Injectable({
  providedIn: 'root'
})

export class MedicineService {
  //רשימה לתיזוכרות
  alarmList:Array<number>=new Array<number>();
 //משתנה בולאני לבדיקה האם הלקוח סוקר או כותב ידנית
 iswrite:boolean=false
//הגדרת משתנה מסוג טופס
myForm:FormGroup=new FormGroup({
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
alarmForm:FormGroup
url :string="https://localhost:44362/api/medicine/"

//httpclient משתנה המאפשר גישה עם מסד הנתונים 
constructor(private http:HttpClient ) { }

//שליפה
GetAll():Observable<Array<medicine>>
{
  return this.http.get<Array<medicine>>(this.url+'GetMedicineList')
}

//שליפת רשימת תרופות לפי שם מייל
GetMedicineListByGmail(gmail:string):Observable<Array<ListMedicine>>
{
  return this.http.get<Array<ListMedicine>>(this.url+'GetMedicineListByGmail/'+gmail+'/1')
}

//שליפת תרופה ע"פ קוד
GetMedicineById(idMedicine:number):Observable<medicine>
{
  return this.http.get<medicine>(this.url+'GetMedicineById/'+idMedicine)
}

//הוספה
AddMedicine(m:medicine):Observable<boolean>
{
return  this.http.put<boolean>(this.url+'addMedicine',m)
}

//עידכון
UpdateMedicine(m:medicine):Observable<boolean>{
  return this.http.post<boolean>(this.url+"updateMedicine",m)
}
//מחיקה
deleteMedicine(id:number):Observable<boolean>
{
  return this.http.delete<boolean>(this.url+"deleteMedicine/"+id)
}

//שמירה התמונה של מדבקת התרופה
saveFileInServer(formData:FormData,email:string):Observable<Map<string,number>>
{
  return this.http.post<Map<string,number>>(this.url+"saveSticker/"+email+"/1",formData)
}



}
