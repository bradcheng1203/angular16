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
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { CardComponent } from './component/card/card.component';
import { EmpAddEditComponent } from './component/emp-add-edit/emp-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,    
    AutocompleteComponent, 
    CardComponent, 
    EmpAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
