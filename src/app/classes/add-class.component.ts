import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { MatPaginator } from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClassesService } from './classes.service';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'classes',
  templateUrl: './add-class.component.html',
  styleUrls: ['./classes.component.scss']
})
export class AddClassesComponent implements OnInit {
          public profileForm: FormGroup;
          submitted = false;
          id:number;
          hide;
          students:object[];
          constructor(public form: FormBuilder,private _activatedRoute:ActivatedRoute,private _classesSearch: ClassesService) {
            this.profileForm = this.form.group({
              className: ['', { validators: [Validators.minLength(6)], updateOn: 'blur' }],
              grade: [''],
              studentname: ['', { validators: [Validators.minLength(6)], updateOn: 'blur' }],
              username: [''],
            });

          }

          ngOnInit() {
            this.id = this._activatedRoute.snapshot.params["id"];
            if (this.id) {
              this._classesSearch.getClass().subscribe(
                  res => {
                    res.forEach(Class => {
                      if(Class.id == this.id){
                        this.profileForm.patchValue({
                          className: Class.name, 
                          grade: Class.grade
                        });
                      }
                    });
                  }
              )
          }
          this._classesSearch.getStudents().subscribe(
            res => {
                this.students=res;
              });
          }

          get grade() {
            return this.profileForm.get('grade');
          }

          get className() {
            return this.profileForm.get('className');
          }

          get username() {
            return this.profileForm.get('username');
          }

          get email() {
            return this.profileForm.get('email');
          }

          grades = [
            { value: 1, viewValue: 'Good' },
            { value: 2, viewValue: 'Very Good' },
            { value: 3, viewValue: 'Excellent' }
          ];
          // checkUserExists() {


          //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });

          // }
          onSubmit() {
            console.log('');
            this.submitted = true;
          }


}
