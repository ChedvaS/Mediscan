import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reminders } from '../classes/reminders';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  //רשימה לתיזוכרות
  alarmListDate:Array<Date>=new Array<Date>();
  //משתנה לנושא התיזכורת
  subjectemail=""
  //httpclient משתנה המאפשר גישה עם מסד הנתונים 
  url :string="https://localhost:44362/api/reminders/"
  constructor(private http:HttpClient ) { }

//שליפת פרטי התראה ע"פ קוד
GetRemindersById(idReminders:number):Observable<reminders>
{
  return this.http.get<reminders>(this.url+'GetReminderById/'+idReminders)
}
}
