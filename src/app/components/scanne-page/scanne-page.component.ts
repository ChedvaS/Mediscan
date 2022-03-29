import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { emit } from 'process';
import { MedicineService } from 'src/app/Services/medicine.service';
import { MedicinestockService } from 'src/app/Services/medicinestock.service';
import { ReminderDetailsService } from 'src/app/Services/reminder-details.service';
import { RemindersService } from 'src/app/Services/reminders.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scanne-page',
  templateUrl: './scanne-page.component.html',
  styleUrls: ['./scanne-page.component.css']
})
export class ScannePageComponent implements OnInit {

  constructor(public router: Router, public activeRouter: ActivatedRoute,
    public medicineserve: MedicineService
    , public medicinstockserve: MedicinestockService,
    public reminderdetailserve: ReminderDetailsService,
    public reminderserve: RemindersService, public userserve: UserService,
    public usersereve: UserService

  ) { }
  //הגדרת משתנים
  fileToUpload: File = null;
  formData: FormData = new FormData();

  ngOnInit() {
  }

  myFunction() {

    this.router.navigate(["/activityReminders"]);
  }

  MapOfId: Map<string, number> = new Map<string, number>()
  //פונקציה לשמירת התמונה
  upload(files: FileList) {
    //set the username
    this.medicineserve.myForm.get("namePatient").setValue(this.userserve.currentuser.fname)
    var email = this.userserve.currentuser.gmail
    let frequency = 0
    //set the file of the user
    this.fileToUpload = files.item(0);
    this.formData.append('sticker', this.fileToUpload, this.fileToUpload.name);
    //send it to extract data
    this.medicineserve.saveFileInServer(this.formData, email).subscribe(p => {
      p= new Map(Object.entries(p));
      if ( p.size > 0) {
        if (p.has("idMedicneStock"))
          this.medicinstockserve.GetMedicineStockById(p.get("idMedicneStock")).subscribe(x => this.medicinstockserve.curentMedicineS = x)
        if (p.has("idMedicne"))
          this.medicineserve.GetMedicineById(p.get("idMedicne")).subscribe(x =>
          {this.medicineserve.currentMedicine=x
            this.medicineserve.myForm.get("nameMedicine").setValue(x.nameMedicine)} )
        // this.medicinstockserve.GetMedicineStockById(p.get("idMedicneStock")).subscribe( x=>
        // this.medicineserve.myForm.get("date").setValue(x.insertDate))
        if (p.has("Idreminderdetails"))
          this.reminderdetailserve.GetReminderDetailsById(p.get("Idreminderdetails")).subscribe(x => {
            this.reminderdetailserve.currentRDetail=x
            this.medicineserve.myForm.get("Minun").setValue(x.dosage)
            this.medicineserve.myForm.get("numDate").setValue(x.amountDays)
            this.medicineserve.myForm.get("frequency").setValue(x.frequincy)
            this.medicineserve.myForm.get("date").setValue(new Date(x.startDate))
            frequency = Number(x.frequincy)
            this.reminderserve.subjectemail = x.subjectGmail
            //מילוי טופס ההתראות לפי כמות התראות כל אחד מתמלא בשעת הלקיחה
            for (let i = 0; i < frequency; i++) {
              this.reminderserve.GetRemindersById(p.get("Idreminder" + i + 1)).subscribe(r =>
                this.reminderserve.alarmListDate.push(r.hourTake)
                , err => console.log(err));
            }
          })
          this.reminderserve.numOfReminder += 1
      this.router.navigate(["/handWritMedicine"]);
      }
      else {
        Swal.fire(
          'לא הצלחנו לקרוא את נתוני המדבקה בבקשה נסה שנית או הקלד ידנית!',
          'success'
        ).then((result) => { this.router.navigate(['/scannePage']) })
      }})}
  }