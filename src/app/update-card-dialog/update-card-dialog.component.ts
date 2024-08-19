import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flashcard } from '../Models/flashcard.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-update-card-dialog',
  templateUrl: './update-card-dialog.component.html',
  styleUrls: ['./update-card-dialog.component.css']
})
export class UpdateCardDialogComponent implements OnInit{
  question = "";
  answer = "";
  createFailed = false;
  updateForm = new FormGroup({
    question: new FormControl(''),
    answer: new FormControl('')
  });
  formControls = {};
  constructor(private api: DatabaseService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public card: Flashcard, private dialogRef: MatDialogRef<UpdateCardDialogComponent>){}


  ngOnInit(){
      console.log("Update dialog received this card: " + JSON.stringify(this.card));
      this.updateForm.controls['question'].setValue(this.card.question);
      this.updateForm.controls['answer'].setValue(this.card.answer);    
    }

  onCancel(){
    this.dialogRef.close(false);
  }

  onUpdate(){
    let newQuestion = this.updateForm.controls['question'].value!;
    let newAnswer = this.updateForm.controls['answer'].value!;
    let card = new Flashcard(this.card.id, newQuestion, newAnswer, this.card.studySetId);
    this.api.updateFlashcard(card).subscribe((data: any) => {
      console.log("Flashcard Updated");
      this.dialogRef.close(card);
    });
  }

}
