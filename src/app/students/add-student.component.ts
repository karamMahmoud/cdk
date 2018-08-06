import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { MatPaginator } from '@angular/material';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'students',
  templateUrl: './add-student.component.html',
  styleUrls: ['./students.component.scss']
})
export class AddStudentsComponent implements OnInit {
    public profileForm:FormGroup;
    submitted = false;
    hide;
      constructor(public form: FormBuilder) { 
              this.profileForm = this.form.group({
                 username:['',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
                email:['',Validators.required],
                number:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
                pwd:['',Validators.required]
             });
    
      }
      get number() {
      return this.profileForm.get('number');
    }
      get username() {
      return this.profileForm.get('username');
    }
     get email() {
      return this.profileForm.get('email');
    }
      // checkUserExists() {
        
           
      //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
           
      // }
     onSubmit() { 
         console.log('');
         this.submitted = true; }
      ngOnInit() {
      }
    
      
}
