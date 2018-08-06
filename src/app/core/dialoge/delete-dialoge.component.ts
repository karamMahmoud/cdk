import { Component, OnInit , Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './delete-dialoge.component.html',
    styleUrls: ['./delete-dialoge.component.scss']
})

export class DeleteDialogComponent implements OnInit {
  animal:string;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DeleteDialogComponent>) {
        console.log(data.animal)
        this.animal=data.animal;
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
