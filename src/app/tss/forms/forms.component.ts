import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  isSubmit=false;
  isNewRecord = false;
  isUpdateRecord = false;
  employees: any = [];
  employeeForm : FormGroup;
  id: number;
  paramURL: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.paramURL = params;
    });
    this.employees = this.getItem('employees')===null?[]:this.getItem('employees');

    this.employeeForm = new FormGroup({
      'id' : new FormControl(null),
      'name' : new FormControl(null, Validators.required),
      'department' : new FormControl('', Validators.required),
      'salary' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.required),
    });
    if(this.paramURL.id){
      this.employees.forEach((data, index) => {
        if(data.id==this.paramURL.id){
          console.log(data);
          this.employeeForm.patchValue(data);
        }
      });
    }
  }

  saveEmployee(value){
    this.isSubmit=true;
    if(value.id){
      this.employees.forEach((data, index) => {
        if(data.id==value.id){
          this.employees[index] = value;
          this.setItem('employees',this.employees);
        }
      });
      this.isUpdateRecord=true;
    }else{
      this.id= this.getItem('id')===null?0:this.getItem('id');
      value.id=this.id+1;
      this.employees.push(value);
      this.setItem('employees', this.employees);
      this.setItem('id',this.id+1);
      this.isNewRecord = true;
    }
  }

  getItem(key){
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key, value){
    localStorage.setItem(key,JSON.stringify(value));
  }

  removeItem(key){
    localStorage.removeItem(key);
  }

  cancel(){
    this.isSubmit= false;
    this.employeeForm.reset();
  }
}
