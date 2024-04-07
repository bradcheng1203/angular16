import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreService } from '../../core/core.service';
import { EmployeeService } from 'src/app/@services/employee.service';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  transout: string[] = [
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444'
  ];
  
  transin: string[] = [
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888'
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
  editdata: any;
  edit!: boolean ;
  
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
      transmemo2: '',
      confirm:''
    });
  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this._empService.getTransById(1).subscribe(res=>{
      this.editdata = res;
      this.stepForm.patchValue(this.editdata);
      console.log(this.stepForm.value);
      this.edit = this.stepForm.get('declaration')?.value;
      console.log(this.edit);
    });
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
  
  call(){
    this.edit = !this.edit;
    console.log(this.edit);
  }
  
  goBack(stepper: MatStepper){
    //stepper.previous();
    stepper.selectedIndex = 0 ;
  }
  
}
