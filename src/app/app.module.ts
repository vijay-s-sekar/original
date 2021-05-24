import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule} from '@angular/common/http';
import { SharedService} from './shared.service';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
    
  ],
  imports: [
   FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,     
   MatCardModule,
   MatButtonModule,
   MatInputModule,
   MatIconModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatSelectModule, 
   ReactiveFormsModule,
    MatFormFieldModule,
   HttpClientModule
 

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
