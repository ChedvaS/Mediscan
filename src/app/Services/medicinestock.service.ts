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

//שליפה
GetAll():Observable<Array<medicinestock>>
{
  return this.http.get<Array<medicinestock>>(this.url+'GetMedicineList')
}

}



