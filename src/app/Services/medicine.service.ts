import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medicine } from '../classes/medicine';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListMedicine } from '../classes/ListMedicine';
import { ReminderDetailsService } from './reminder-details.service';
import { RemindersService } from './reminders.service';

@Injectable({
  providedIn: 'root'
})

export class MedicineService {
  //רשימה לתיזוכרות
  alarmList:Array<number>=new Array<number>();
  //תרופה נוכחית
  currentMedicine:medicine = new medicine()
 //משתנה בולאני לבדיקה האם הלקוח סוקר או כותב ידנית
 iswrite:boolean=false
//הגדרת משתנה מסוג טופס
myForm:FormGroup
alarmForm:FormGroup
url :string="https://localhost:44362/api/medicine/"

//httpclient משתנה המאפשר גישה עם מסד הנתונים 
constructor(
  public reminderDServe:ReminderDetailsService,public reminderserve:RemindersService,
   private http:HttpClient ) { 
  this.initalizeForms()
}

initalizeForms(){
  this.myForm = new FormGroup({
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
    this.alarmForm = new FormGroup({
      
    })
}
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

//מילוי הנתונים במשתנים העכשיוים 
fillDataInCurrent()
{
  //עידכון שם תרופה
  this.currentMedicine.nameMedicine=this.myForm.get("nameMedicine").value
  //עידכון פרטי התראה
  this.reminderDServe.currentRDetail.startDate=new Date(this.myForm.get("date").value)
  this.reminderDServe.currentRDetail.dosage=this.myForm.get("Minun").value
  this.reminderDServe.currentRDetail.amountDays=this.myForm.get("numDate").value
  this.reminderDServe.currentRDetail.frequincy=this.myForm.get("frequency").value 
  //this.reminderDServe.currentRDetail.subjectGmail=this.alarmForm.get("frequency").value 
}

}
