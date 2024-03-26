import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/@services/employee.service';
import { CoreService } from '../../core/core.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Food } from 'src/app/@model/Customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  empForm: FormGroup;
  editdata: any;
  
  education: string[] = [
    '博士',
    '研究所',
    '大學',
    '專科',    
    '普通高中',    
  ];
  
  markets: string[] = [
    'market 1',
    'market 2',
    'market 3',
    'market 4'
  ];  
  
  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _empService: EmployeeService,    
    private _coreService: CoreService 
  ) {
    
    this.empForm = this._fb.group({
      fullname : '',
      accountnumber: '',      
      birthday: '',
      homeaddress: '',
      homecitystatezipcode: '',
      hometelephonenumber: '',
      emailaddress: '',
      education: '',
      experience: '', 
      package: '', 
      gender:'',
      markets : ''
    });
    
  }   
  
  ngOnInit(): void {
    this._empService.getCusrtmerById(1).subscribe(res=>{
      this.editdata = res;
      this.empForm.patchValue(this.editdata);
      console.log(this.empForm.value);      
    })
  }
  
  onFormSubmit() {    
    console.log(this.empForm.value);
    if (this.empForm.valid) {      
      this._empService.updateCustomer(1, this.empForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Employee detail updated!');
        },
          error: (err: any) => {
            console.error(err);
        },
      });
    }
  } 
  
  
  
}
