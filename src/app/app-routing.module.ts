import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { CardComponent } from './component/card/card.component';
import { EmpAddEditComponent } from './component/emp-add-edit/emp-add-edit.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'card',component:CardComponent},
  {path:'emp',component:EmpAddEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
