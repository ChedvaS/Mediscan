import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medicinestock } from '../classes/medicinestock';

@Injectable({
  providedIn: 'root'
})
export class MedicinestockService {

url :string="https://localhost:44362/api/medicineStock/"

//httpclient משתנה המאפשר גישה עם מסד הנתונים 
  constructor(private http:HttpClient) { }
//משתנה למדיסיןסטוק נוכחי
curentMedicineS:medicinestock=new medicinestock()
//שליפה
GetAll():Observable<Array<medicinestock>>
{
  return this.http.get<Array<medicinestock>>(this.url+'GetMedicineList')
}

//שליפת פרטי תרופה ע"פ קוד
GetMedicineStockById(idMedicine:number):Observable<medicinestock>
{
  return this.http.get<medicinestock>(this.url+'GetmedicineStockById/'+idMedicine)
}

הוספה

AddMedicineStock(ms:medicinestock):Observable<boolean>
{
  return this.http.post<boolean>(this.url+"updateMedicine",ms)
}
 //עידכון 
 updateMedicine(ms:medicinestock):Observable<boolean>
 {
   return this.http.post<boolean>(this.url+"updateMedicine",ms)
 }

}



