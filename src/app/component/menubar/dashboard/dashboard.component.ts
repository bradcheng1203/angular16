import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/@services/employee.service';
import { CoreService } from '../../core/core.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  empForm: FormGroup;
  
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  
  data: any;
  
  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _empService: EmployeeService,    
    private _coreService: CoreService 
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });    
  }
  
  ngOnInit(): void {
    this.data = {
      "firstName": "Brinn",
      "lastName": "Jephcote",
      "email": "bjephcote0@archive.org",
      "dob": "1981-10-05T12:09:39Z",
      "gender": "Male",
      "education": "Graduate",
      "company": "Gabspot",
      "experience": 4,
      "package": 0.037,
      "id": 1
    };
    
    this.empForm.patchValue(this.data);
  }
  
  getEmployeeTest() {
    if (this.empForm.valid) {
      if (this.data) {
        alert( this.data );
      }else{
        alert( this.data );
      }      
    }
  }
}
