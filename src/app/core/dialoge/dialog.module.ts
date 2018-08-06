import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './delete-dialoge.component';
import { ChooseTypeDialogComponent } from './choose-type-dialog.component';
import { MatButtonToggleModule,MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material';

@NgModule({
 imports:      [ MatButtonModule,MatRadioModule,FormsModule,MatButtonToggleModule,ReactiveFormsModule,MatDialogModule],
 declarations: [ DeleteDialogComponent,ChooseTypeDialogComponent ],
 exports:      [ DeleteDialogComponent,
                 ],
providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
]
})
export class DialogModule { }