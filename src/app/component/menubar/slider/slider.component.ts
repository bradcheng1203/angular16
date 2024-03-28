import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/@model/Interfaces';
import { GlobalserviceService } from 'src/app/@services/globalservice.service';
import { CoreService } from '../../core/core.service';
import { EmployeeService } from 'src/app/@services/employee.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {  
  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _empService: EmployeeService,    
    private _coreService: CoreService ,
    private _globSvc: GlobalserviceService
  ) {        
   }
  
  task2 !: Task ;
  allComplete2 !: boolean;
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // debugger;   
  }
  
  ngOnDestroy(){
    // debugger;    
  }
   
}
