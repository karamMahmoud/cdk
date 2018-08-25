import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../core/dialoge/delete-dialoge.component';
import { ChooseTypeDialogComponent } from '../core/dialoge/choose-type-dialog.component';
import { Router } from '@angular/router' 

@Component({
  selector: 'classes',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  	displayedColumns = ['userId', 'userName', 'progress', 'color'];
	rows: Array<any> = [];
    showResponsiveTableCode;

	@ViewChild(MatPaginator) paginator1: MatPaginator;
    pageLength = 0;
    pageSize = 15;
    helpers = ResponsiveTableHelpers;
    @Input() status;
    @Input() actionStatus;
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();
    @Output() view = new EventEmitter();
    @Output() page = new EventEmitter();
    @Output() sort = new EventEmitter();
    @Output() dup = new EventEmitter();
  	constructor(public router:Router,public dialog: MatDialog) {
   	}

    ngOnInit() {
        this.getRows();
    }
  	next(event) {
        this.rows = [];
    	for (var i= 1 * event.pageIndex * event.pageSize; i< event.pageSize+event.pageIndex*event.pageSize ;i++) {
            this.rows = [...this.rows,this.helpers.rows[i]];
        }
    }
    getRows() {
        for (var i=0;i<this.pageSize;i++) {
            this.rows = [...this.rows,this.helpers.rows[i]];
        }
        this.pageLength = this.helpers.rows.length;
    }
    sortData(val){
    }

    foods = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
      ];

      onNoticeTriggered() {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
          width: '40%',
          panelClass:'DeleteDialog',
          data: {animal:"karam"}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
        });
      }

      dialogChoose() {
        const dialogRef = this.dialog.open(ChooseTypeDialogComponent, {
          width: '50%',
          panelClass:'DeleteDialog',
          data: {animal:"Student"}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          if(result == 'add'){
              this.router.navigate(['/../auth/students/add']);
          }
          if(result == 'sub'){
              this.router.navigate(['/../auth/students/subscribe']);
          }
        });
      }
}
