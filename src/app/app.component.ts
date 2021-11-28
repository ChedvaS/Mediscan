import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empty';

  upload(file:File)
  {
    debugger
   console.log(file[0].name);
//    this.srvice.sendFile(file[0]).subscribe(e=>
//  { console.log("sucsses");}
  //  )
  }
 
}
