import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { Country } from 'src/app/@model/Customer';
import { AssociateService } from 'src/app/@services/associate.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.scss']
})
export class AssociateComponent implements OnInit {

  associatellist: any;
  addressarray !: FormArray<any>;
  countrylist !: Country[];
  filteroptions !: Observable<Country[]>
  editdata: any;
  
  constructor(private builder: FormBuilder, private service: AssociateService, 
    private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.loadAssociate();
    this.loadCountry();
  }
  
  myform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    address: this.builder.array([])
  });
  
  saveAssociate() {
    // console.log(this.myform.value);
    this.service.saveAssociate(this.myform.value, this.myform.value.id).subscribe(r => {
      this.toastr.success('Saved.');
    });
  }

  loadAssociate() {
    this.service.getAssociate().subscribe(item => {      
      this.associatellist = item;
    });
  }
  
  loadCountry() {
    this.service.getCountry().subscribe(item => {
      this.countrylist = item;
    });
  }
  
  autoChange(index: any) {
    this.addressarray = this.myform.get("address") as FormArray;
    const addobj = this.addressarray.at(index) as FormGroup;
    const _control = addobj.get("country") as FormControl;
    this.filteroptions = _control.valueChanges.pipe(
      startWith(''), map(value => this._Listfilter(_control.value || ''))
    )
  }
  
  private _Listfilter(value: string): Country[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.countrylist.filter(option => option.name.toLocaleLowerCase().includes(searchvalue) ||
      option.code.toLocaleLowerCase().includes(searchvalue));
  }

  addAddress() {
    const associate = this.myform.value.id;
    if (associate != '') {
      this.addressarray = this.myform.get("address") as FormArray;
      this.addressarray.push(this.createAddrow())
    } else {
      this.toastr.warning('Please choose associate');
    }
  }
  
  createAddrow() {
    return this.builder.group({
      title: this.builder.control(''),
      country: this.builder.control(''),
      fulladdress: this.builder.control('')
    })
  }

  get getaddress() {
    return this.myform.get("address") as FormArray;
  }

  customerChange(code: any) {
    this.service.getAssociatebycode(code).subscribe(res => {
      this.editdata = res;
      this.addressarray=this.myform.get("address") as FormArray;
      while (this.addressarray.length !== 0) {
        this.addressarray.removeAt(0)
      }
      
      for (let i = 0; i < this.editdata.address.length; i++){
        this.addAddress();
      }
      this.myform.setValue({ id: this.editdata.id, name: this.editdata.name, address: this.editdata.address });
    });
  }
  
  deleteAddress(index:number,code: any){
    this.addressarray.removeAt(index);
  }  
}
