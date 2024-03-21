import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './component/menubar/menubar.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { EmpAddEditComponent } from './component/menubar/emp-add-edit/emp-add-edit.component';
import { EmployeeComponent } from './component/menubar/employee/employee.component';
import { SliderComponent } from './component/menubar/slider/slider.component';
import { TableComponent } from './component/menubar/table/table.component';
import { DashboardComponent } from './component/menubar/dashboard/dashboard.component';
import { InputComponent } from './component/menubar/input/input.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AutocompleteComponent } from './component/menubar/autocomplete/autocomplete.component';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,    
    AutocompleteComponent, 
    CardComponent, 
    EmpAddEditComponent, EmployeeComponent, SliderComponent, TableComponent, DashboardComponent, InputComponent, LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({timeOut: 2000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
