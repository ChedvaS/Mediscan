import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url :string="https://localhost:44362/api/user/"
  constructor(private http:HttpClient ) { }

  //הוספה
  addUser  (u:users):Observable<boolean>
{
return  this.http.put<boolean>(this.url+'addUser',u)
}
}
