import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/classes/users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public userserve:UserService) { }
user:users=new users()
  ngOnInit(): void {
  }
  resetpassword()
  {
    this.userserve.GetUserById(this.userserve.currentuser.gmail).subscribe(x=>x.pass=this.user.pass)

  }

}
