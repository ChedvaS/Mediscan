import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ScannePageComponent } from './components/scanne-page/scanne-page.component';
import { HandWritMedicineComponent } from './components/hand-writ-medicine/hand-writ-medicine.component';
import { SearchMedicineComponent } from './components/search-medicine/search-medicine.component';
import { ActivityRemindersComponent } from './components/activity-reminders/activity-reminders.component';
import { DetailsMedicineTakeComponent } from './components/details-medicine-take/details-medicine-take.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HandWritReminderComponent } from './components/hand-writ-reminder/hand-writ-reminder.component';
import { MedicineService } from './Services/medicine.service';
import { ReminderDetailsService } from './Services/reminder-details.service';
import { UserService } from './Services/user.service';


//import { MatToolbarModule } from '@angular/material/toolbar'; ‏


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ScannePageComponent,
    HandWritMedicineComponent,
    SearchMedicineComponent,
    DetailsMedicineTakeComponent,
    ActivityRemindersComponent,
    HandWritReminderComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    //MatIconRegistry,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    //MatToolbarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [MedicineService,ReminderDetailsService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
