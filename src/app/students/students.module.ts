import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogModule } from '../core/dialoge/dialog.module';
import { DeleteDialogComponent } from '../core/dialoge/delete-dialoge.component';
import { ChooseTypeDialogComponent } from '../core/dialoge/choose-type-dialog.component';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,
         MatSortModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatSelectModule,
         MatChipsModule,
         MatButtonToggleModule } from '@angular/material';


import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { StudentsComponent } from './students.component';
import { AddStudentsComponent } from './add-student.component';
import { SubscribeStudentsComponent } from './subscribe-student.component';


export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

const routes: Routes = [
    { path: '', component: StudentsComponent },
    { path: 'add', component: AddStudentsComponent },
    { path: 'subscribe', component: SubscribeStudentsComponent }
];




@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DialogModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
  ],
  declarations: [
    StudentsComponent,
    AddStudentsComponent,
    SubscribeStudentsComponent
  ]
   ,
  entryComponents: [DeleteDialogComponent,ChooseTypeDialogComponent],
  exports: [
    ]
      
})
export class StudentsModule { }


