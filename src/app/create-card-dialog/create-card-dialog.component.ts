import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
  constructor(private api: DatabaseService, private dialogRef: MatDialogRef<CreateCardDialogComponent>){}

  onCancel(){
    this.dialogRef.close();
  }

  onCreate(){
    
    let card = new Flashcard(0, this.question, this.answer);
    this.api.createFlashcard(card).subscribe(
      {next: (data:any) => {
       // this.loadingService.loadingOff();
        console.log("Succesfully created flashcard: " + JSON.stringify(data));
        card.id = data.id;
        this.dialogRef.close(card);
       // this.studentService.refreshStudentList();
      },   
      error: (e) => {
        console.log("Error creating student: " + e);
        this.createFailed = true;
      //  this.loadingService.loadingOff();
      }
    }
    );
  }
}
