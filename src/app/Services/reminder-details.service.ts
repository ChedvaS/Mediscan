import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reminderdetails } from '../classes/reminderdetails';
import { reminders } from '../classes/reminders';
import { TakingDetails } from '../classes/TakingDetails';

@Injectable({
  providedIn: 'root'
})
export class ReminderDetailsService {
  //משתנה בולאני לבדיקה האם הוספה
  IsAdd:boolean=false;
//פרטי תיזכורת נוכחית
currentRDetail:reminderdetails=new reminderdetails();
//httpclient משתנה המאפשר גישה עם מסד הנתונים 
url :string="https://localhost:44362/api/reminderdatails/"
constructor(private http:HttpClient ) { }
  
//שליפה
GetAll():Observable<Array<reminderdetails>>
{
  return this.http.get<Array<reminderdetails>>(this.url+'GetReminderDetailsList')
}
//שליפת פרטי התראה ע"פ קוד
GetReminderDetailsById(idReminderDetails:number):Observable<reminderdetails>
{
  return this.http.get<reminderdetails>(this.url+'GetReminderDetailsById/'+idReminderDetails)
}
//הוספה
addReminderDetails  (r:reminderdetails):Observable<boolean>
{
return  this.http.put<boolean>(this.url+'addReminderDetails',r)
}
//עידכון
updateReminderDetails(r:reminderdetails):Observable<boolean>{
  return this.http.post<boolean>(this.url+"updateReminderDetails",r)
}
//מחיקה
deleteMedideleteReminderDetailscine(id:number):Observable<boolean>
{
  return this.http.delete<boolean>(this.url+"deleteReminderDetails/"+id)
}
 //שליפת פירוט לקיחה לפי מייל
 GetTakingDetailsByGmail(gmail:string):Observable<Array<TakingDetails>>
 {
   return this.http.get<Array<TakingDetails>>(this.url+'GetTakingDetailsByGmail/'+gmail+'/1')
 }

}
