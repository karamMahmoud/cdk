import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { MatPaginator } from '@angular/material';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'classes',
  templateUrl: './add-class.component.html',
  styleUrls: ['./classes.component.scss']
})
export class AddClassesComponent implements OnInit {
    public profileForm:FormGroup;
    submitted = false;
    hide;
      constructor(public form: FormBuilder) { 
              this.profileForm = this.form.group({
                 username:['',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
                email:[''],
                studentname:[ '',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
             });
    
      }
      get studentname() {
      return this.profileForm.get('studentname');
    }
      get username() {
      return this.profileForm.get('username');
    }
     get email() {
      return this.profileForm.get('email');
    }

    foods = [
      { value: 'steak-0', viewValue: 'Steak' },
      { value: 'pizza-1', viewValue: 'Pizza' },
      { value: 'tacos-2', viewValue: 'Tacos' }
    ];
      // checkUserExists() {
        
           
      //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
           
      // }
     onSubmit() { 
         console.log('');
         this.submitted = true; }
      ngOnInit() {
      }
    
      
}
