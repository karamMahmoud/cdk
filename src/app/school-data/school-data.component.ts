import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'school-data',
  templateUrl: './school-data.component.html',
  styleUrls: ['./school-data.component.scss']
})
export class SchoolDataComponent implements OnInit {
     public profileForm:FormGroup;
    submitted = false;
    hide;
      constructor(public form: FormBuilder) { 
              this.profileForm = this.form.group({
                schoolname:['',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
                address:[''],
                site:[ '',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
                code:[ '',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
             });
    
      }
      get schoolname() {
      return this.profileForm.get('schoolname');
    }
      get address() {
      return this.profileForm.get('address');
    }
     get site() {
      return this.profileForm.get('site');
    }
     get code() {
      return this.profileForm.get('code');
    }

     onSubmit() { 
         console.log('');
         this.submitted = true; }
      ngOnInit() {
      }
      
}
