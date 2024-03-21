import { DashboardComponent } from './component/menubar/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { EmpAddEditComponent } from './component/menubar/emp-add-edit/emp-add-edit.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { EmployeeComponent } from './component/menubar/employee/employee.component';
import { SliderComponent } from './component/menubar/slider/slider.component';
import { TableComponent } from './component/menubar/table/table.component';
import { InputComponent } from './component/menubar/input/input.component';
import { LoginComponent } from './login/login.component';
import { AutocompleteComponent } from './component/menubar/autocomplete/autocomplete.component';

const routes: Routes = [  
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenubarComponent,
    children:[      
      {path:'employee',component:EmployeeComponent},      
      {path:'dashboard',component:DashboardComponent},      
      {path:'slider',component:SliderComponent},
      {path:'table',component:TableComponent},
      {path:'input',component:InputComponent},
      {path:'autocomplete',component:AutocompleteComponent},
      {path:'', redirectTo:'dashboard', pathMatch:'full' }
    ]
  },
  {path:'', redirectTo:'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
