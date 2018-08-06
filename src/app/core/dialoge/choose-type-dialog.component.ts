import { Component, OnInit , Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
@Component({
    selector: 'choose-type',
    templateUrl: './choose-type-dialog.component.html',
    styleUrls: ['./choose-type-dialog.component.scss']
})

export class ChooseTypeDialogComponent implements OnInit {
  animal:string;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<ChooseTypeDialogComponent>) {
        console.log(data.animal)
        this.animal="";
     }

    ngOnInit() {
    }

  closeDialog() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
