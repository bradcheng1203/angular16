import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/@services/employee.service';
import { CoreService } from '../../core/core.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _empService: EmployeeService,    
    private _coreService: CoreService 
  ) {  
  }
  
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  
  ngOnInit(): void {    
  }
  
  
}
