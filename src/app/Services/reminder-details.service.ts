import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reminderdetails } from '../classes/reminderdetails';

@Injectable({
  providedIn: 'root'
})
export class ReminderDetailsService {

  url :string="https://localhost:44345/api/reminderdatails/"
  //httpclient משתנה המאפשר גישה עם מסד הנתונים 
  constructor(private http:HttpClient ) { }
  //שליפה
  GetAll():Observable<Array<reminderdetails>>
  {
    return this.http.get<Array<reminderdetails>>(this.url+'GetReminderDetailsList')
  }
//שליפת תרופה ע"פ קוד
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

}
