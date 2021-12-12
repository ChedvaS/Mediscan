
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medicine } from '../classes/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  url :string="https://localhost:44345/api/medicine/"
  //httpclient משתנה המאפשר גישה עם מסד הנתונים 
  constructor(private http:HttpClient ) { }
  //שליפה
  GetAll():Observable<Array<medicine>>
  {
    return this.http.get<Array<medicine>>(this.url+'GetMedicineList')
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


}
