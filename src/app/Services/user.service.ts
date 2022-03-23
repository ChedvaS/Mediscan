import { Injectable, NgZone } from '@angular/core';
import auth from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Route, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { users } from '../classes/users';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { reminders } from '../classes/reminders';
import { RemindersService } from './reminders.service';
import { activityReminders } from '../classes/ActivityReminders';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = "https://localhost:44362/api/user/"
  userData: any; // Save logged in user data

  currentuser: users = new users()
  ListActivityRemindersOfUser:activityReminders[]
  constructor(
    public reminderserve:RemindersService,
    private http: HttpClient,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning,
    , public route: Router
  ) {

    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
      
  // Sign in with email/password
  SignIn() {
    return this.afAuth
      .signInWithEmailAndPassword(this.currentuser.gmail, this.currentuser.pass)
      .then((result) => {
        this.ngZone.run(() => {
      

          this.GetUserById(this.currentuser.gmail).subscribe(x=>this.currentuser.fname=x.fname,err=>alert("שגיאה בחיבור לשרת"))
          this.reminderserve.GetActivityRemindersByGmail(this.currentuser.gmail).subscribe(x => {
            this.reminderserve.numOfReminder = x.length
          })
          this.route.navigate(["/scannePage"])
        });
        this.SetUserData(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp() {
    return this.afAuth
      .createUserWithEmailAndPassword(this.currentuser.gmail, this.currentuser.pass)
      .then((result) => {
        //להוסיף פופאפ ברוך הבא
        this.addUser().subscribe(x => x ? alert("ברוך הבא") : alert("שיגאה"), err => alert("הזנת פרטים שגויים"))
          , this.route.navigate(["/scannePage"])
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SetUserData(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        //this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });    //לבדוק אם הלקוח רשום במערכת
    
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  GoogleAuth() {

    return this.AuthLogin(new auth.auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.SendVerificationMail();
        this.router.navigate(['scannePage']);
      }
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        result.user.linkWithCredential(auth.auth.EmailAuthProvider.credential(result.user.email, 'password'))
        this.currentuser.gmail=result.user.email,
        this.currentuser.fname=result.user.displayName
        this.ngZone.run(() => {
    //שליפת לקוח מהדתה בייס
 this.GetUserById(this.currentuser.gmail).subscribe(x=>
  {if (x)
    this.currentuser.fname=x.fname
    else
    {

      this.addUser().subscribe(x=>alert("ברוך הבא"),err=>alert("שגיאה"))
    }
  }
    ,err=>alert("שגיאה בחיבור לשרת"))
          this.router.navigate(['scannePage']);
        });
        this.SetUserData(result);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.user.uid}`
    );
    const userData = { "email": this.currentuser.gmail, "password":this.currentuser.pass  }
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.currentuser = new users()
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
//שליפת לקוח לפי קוד
GetUserById(gmail:string):Observable<users>
{
  return this.http.get<users>(this.url+'GetUserById/'+gmail+"/1")
}

  //הוספה
  addUser(): Observable<boolean> {
    return this.http.put<boolean>(this.url + 'addUser', this.currentuser)
  }

}