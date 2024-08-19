import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flashcard } from '../Models/flashcard.model';
import { DatabaseService } from '../Services/database.service';
import { UpdateCardDialogComponent } from '../update-card-dialog/update-card-dialog.component';
import { StudySet } from '../Models/studyset.model';

@Component({
  selector: 'app-update-studyset-dialog',
  templateUrl: './update-studyset-dialog.component.html',
  styleUrls: ['./update-studyset-dialog.component.css']
})
export class UpdateStudysetDialogComponent {
  categoryName = "";
  createFailed = false;
  updateForm = new FormGroup({
    categoryName: new FormControl(''),
  });
  formControls = {};
  constructor(private api: DatabaseService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public studySet: StudySet, private dialogRef: MatDialogRef<UpdateCardDialogComponent>){}


  ngOnInit(){
      console.log("Update dialog received this card: " + JSON.stringify(this.studySet));
      this.updateForm.controls['categoryName'].setValue(this.studySet.category);
    }

  onCancel(){
    this.dialogRef.close(false);
  }

  onUpdate(){
    let newCategory = this.updateForm.controls['categoryName'].value!;
    let studySet = new StudySet(this.studySet.id, this.studySet.userId, newCategory);
    this.api.updateStudySet(studySet).subscribe((data: any) => {
      console.log("Study set updated");  
      this.dialogRef.close(studySet);
    });
  }

}
