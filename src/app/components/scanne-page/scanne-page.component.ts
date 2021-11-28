import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scanne-page',
  templateUrl: './scanne-page.component.html',
  styleUrls: ['./scanne-page.component.css']
})
export class ScannePageComponent implements OnInit {

  constructor(public router:Router,public activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  upload(file:File)
  {
    debugger
   console.log(file[0].name);
//    this.srvice.sendFile(file[0]).subscribe(e=>
//  { console.log("sucsses");}
  //  )
  }
}
