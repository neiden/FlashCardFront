import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudySet } from '../Models/studyset.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateStudysetDialogComponent } from '../update-studyset-dialog/update-studyset-dialog.component';
import { DeleteCardDialogComponent } from '../delete-card-dialog/delete-card-dialog.component';
import { DeleteStudysetDialogComponent } from '../delete-studyset-dialog/delete-studyset-dialog.component';

@Component({
  selector: 'app-studyset',
  templateUrl: './studyset.component.html',
  styleUrls: ['./studyset.component.css']
})
export class StudysetComponent {
  @Input() studySet!: StudySet;
  @Output() studySetDeleteEvent = new EventEmitter<any>();
  @Output() refreshStudySetListEvent = new EventEmitter<any>();

  constructor(private dialogRef: MatDialog, private router: Router){}

  openStudyView(id: string){
    this.router.navigate(["feed", id]);
  }





  
  updateStudySet(event: Event){
    let dialog = this.dialogRef.open(UpdateStudysetDialogComponent, {data: this.studySet});
    event.stopPropagation();
    dialog.afterClosed().subscribe(result => {
      if (result){
        this.refreshStudySetListEvent.emit(result);
      }
    })
  }

  deleteStudySet(event: Event){
    let dialog = this.dialogRef.open(DeleteStudysetDialogComponent);
    event.stopPropagation();
    dialog.afterClosed().subscribe(result => {  
      if (result){
        this.studySetDeleteEvent.emit(this.studySet.id);
      }
    });
  }
}
