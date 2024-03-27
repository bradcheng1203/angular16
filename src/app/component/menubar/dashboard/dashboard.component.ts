import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/@services/employee.service';
import { CoreService } from '../../core/core.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Plan, Amount } from 'src/app/@model/Rateplan';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

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
      markets : '',
      checkme : '',      
      Indeterminate :'',
      Primary:'',
      Accent:'',
      Warn:''
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
  
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
