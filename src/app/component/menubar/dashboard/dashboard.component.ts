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
  empForm: FormGroup;
  editdata: any;
  
  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _empService: EmployeeService,    
    private _coreService: CoreService 
  ) {
    this.empForm = this._fb.group({
      fullName : '',
      accountNumber: '',      
      birthDay: '',
      homeAddress: '',
      homeCityStateZipCode: '',
      homeTelephoneNumber: '',
      emailAddress: '',
      education: '',
      experience: '', 
      package: '', 
      gender:'',      
    });
  }   
  
  ngOnInit(): void {
    this._empService.getCusrtmerById(1).subscribe(res=>{
      this.editdata = res;      
      console.log(this.editdata);      
      this.empForm.patchValue(this.editdata);
      
      // this.empForm.setValue({ 
      //   fullName: this.editdata.fullName ,
      //   accountNumber: '',      
      //   birthDay: '',
      //   homeAddress: '',
      //   homeCityStateZipCode: '',
      //   homeTelephoneNumber: '',
      //   emailAddress: '',
      //   education: '',
      //   experience: '', 
      //   package: '', 
      //   gender:'',
      //   });
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
  
  education: string[] = [
    '博士',
    '研究所',
    '大學',
    '專科',    
    '普通高中',    
  ]; 
  
  occupation: string[] = [
    '水泥',
    '食品',
    '金融',
    '科技',    
    '塑膠',    
  ];  
  
  investmentObjective: string[] = [
    'CapitalPreservation',
    'Income',
    'Growth',
    'Speculation',
    'Other'
  ];
  
  investmentExperience: string[] = [
    'None',
    'Limited',
    'Good',
    'Extensive'
  ];
}
