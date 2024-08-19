import { Component } from '@angular/core';
import { DatabaseService } from '../Services/database.service';
import { MatDialogRef } from '@angular/material/dialog';
import { StudySet } from '../Models/studyset.model';
import { JwtAuthenticatorService } from '../Services/jwt-authenticator.service';

@Component({
  selector: 'app-create-studyset-dialog',
  templateUrl: './create-studyset-dialog.component.html',
  styleUrls: ['./create-studyset-dialog.component.css']
})
export class CreateStudysetDialogComponent {

  createFailed = false;
  categoryName = "";
  constructor(private api: DatabaseService,private jwt: JwtAuthenticatorService, private dialogRef: MatDialogRef<CreateStudysetDialogComponent>){}

  onCancel(){
    this.dialogRef.close();
  }

  onCreate(){
    let studySet = new StudySet(0, 0, this.categoryName);
    this.api.createStudySet(studySet).subscribe(
      {
        next: (result: any) => {
          console.log("Succesfully created flashcard: " + JSON.stringify(result));
          studySet.id = result.id;
          studySet.userId = result.userId;
          this.dialogRef.close(studySet);
         // this.studentService.refreshStude
        },
        error: (e: Error) => {
          console.log(e);
        }
      }
    )
  }

}
