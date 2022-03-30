import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { activityReminders } from '../classes/ActivityReminders';
import { reminders } from '../classes/reminders';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {
  reminders: Array<reminders> = new Array<reminders>()
  //רשימה לתיזוכרות
  alarmListDate: Array<Date> = new Array<Date>();
  //משתנה לנושא התיזכורת
  subjectemail = ""
  medicineTakeDetailsForm: FormGroup
  numOfReminder: number = 0
  //httpclient משתנה המאפשר גישה עם מסד הנתונים 
  url: string = "https://localhost:44362/api/reminders/"
  constructor(private http: HttpClient) { }

  //שליפת פרטי התראה ע"פ קוד
  GetRemindersById(idReminders: number): Observable<reminders> {
    return this.http.get<reminders>(this.url + 'GetReminderById/' + idReminders)
  }
  //שליפת רשימת תיזכורות לפי מייל
  GetReminderByGmail(gmail: string): Observable<Array<reminders>> {
    return this.http.get<Array<reminders>>(this.url + 'GetReminderByGmail/' + gmail + '/1')
  }

  //שליפת רשימת תיזכורות פעילות לפי מייל 
  GetActivityRemindersByGmail(gmail: string): Observable<Array<activityReminders>> {
    return this.http.get<Array<activityReminders>>(this.url + 'GetActivityRemindersByGmail/' + gmail + '/1')
  }
  getAllReminders(): Observable<Array<reminders>> {
    return this.http.get<Array<reminders>>(this.url + 'GetAllReminders')

  }
  AddReminder(reminder): Observable<boolean> {
    return this.http.post<boolean>(this.url + "AddReminder", reminder)
  }
  UpdateReminder(reminder): Observable<boolean> {
    return this.http.post<boolean>(this.url + "UpdateReminder", reminder)
  }
}

