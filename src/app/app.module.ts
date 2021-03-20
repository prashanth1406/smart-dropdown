import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartDropdownComponent } from './smart-dropdown/smart-dropdown.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SmartDropdownComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
