import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreService } from '../../core/core.service';
import { EmployeeService } from 'src/app/@services/employee.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  transout: string[] = [
    '00000000000001',
    '00000000000002',
    '00000000000003',
    '00000000000004'
  ];
  
  currency: string[] = [
    '日圓',
    '美元',
    '歐元'
  ];
  
  transreason: string[] = [
    '作外匯存款不在匯出1',
    '作外匯存款不在匯出2',
    '作外匯存款不在匯出3',
    '作外匯存款不在匯出4',
  ];
  
  stepForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _coreService: CoreService
  ) {
    this.stepForm = this._fb.group({
      transout: '',
      transoutamt: '',
      transincurr: '',
      transinamt: '',
      transin: '',
      transtype: '',
      transdate: '',
      declaration: '',
      transreason: '',
      transmemo: '',
    });
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  onFormSubmit() {    
    console.log(this.stepForm.value);
    if (this.stepForm.valid) {      
      this._empService.updateTrans(1, this.stepForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Trans updated!');
        },
          error: (err: any) => {
            console.error(err);
        },
      });
    }
  }

}
