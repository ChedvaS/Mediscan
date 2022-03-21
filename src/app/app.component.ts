import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public route:Router){}
  
  title = 'Mediscane';
  ngOnInit() {
    this.route.navigate(['/logIn'])

    // this.route.navigate(['/open'])
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


