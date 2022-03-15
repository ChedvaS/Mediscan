import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(public router:Router,public activeRouter:ActivatedRoute ,public userserve:UserService) { }

  ngOnInit(): void {
  }
  signIn()
  {
    debugger
      //בדיקת משתמש
      this.router.navigate(['/scannePage'])
  }

}
