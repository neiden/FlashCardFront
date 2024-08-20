import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatabaseService } from '../Services/database.service';
import { Flashcard } from '../Models/flashcard.model';

@Component({
  selector: 'app-create-card-dialog',
  templateUrl: './create-card-dialog.component.html',
  styleUrls: ['./create-card-dialog.component.css']
})
export class CreateCardDialogComponent {
  createFailed = false;
  question = "";
  answer = "";
  constructor(private api: DatabaseService,@Inject(MAT_DIALOG_DATA) public studySetId: number, private dialogRef: MatDialogRef<CreateCardDialogComponent>){}

  onCancel(){
    this.dialogRef.close();
  }

  onCreate(){
    
    let card = new Flashcard(0, this.question, this.answer, this.studySetId);
    this.api.createFlashcard(card).subscribe(
      {next: (data:any) => {
        console.log("Succesfully created flashcard: " + JSON.stringify(data));  
        card.id = data.id;
        this.dialogRef.close(card);
      },   
      error: (e) => {
        console.log("Error creating student: " + e);
        this.createFailed = true;
      }
    }
    );
  }
}
