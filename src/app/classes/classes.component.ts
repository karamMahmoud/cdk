import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../core/dialoge/delete-dialoge.component';
import { ClassesService } from './classes.service';


@Component({
  selector: 'classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  	displayedColumns = ['userId', 'userName', 'progress', 'color'];
	rows: Array<any> = [];
    showResponsiveTableCode;
    classes:object[];

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
  	constructor(public dialog: MatDialog,private _classesSearch: ClassesService) {
   	}

    ngOnInit() {
        this._classesSearch.getClasses().subscribe(
            res => {
                this.classes = res;
        this.getRows();
        
            })
               
    }
  	next(event) {
        this.rows = [];
    	for (var i= 1 * event.pageIndex * event.pageSize; i< event.pageSize+event.pageIndex*event.pageSize ;i++) {
            this.rows = [...this.rows,this.classes[i]];
        }
    }
    getRows() {
        for (var i=0;i<this.classes.length;i++) {
            this.rows = [...this.rows,this.classes[i]];
        }
        this.pageLength = this.classes.length;
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
          data: {animal:"Class"}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
        });
      }
}
