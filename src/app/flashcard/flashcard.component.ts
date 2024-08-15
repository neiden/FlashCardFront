import { Component, Output } from '@angular/core';
import { Flashcard } from '../Models/flashcard.model';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCardDialogComponent } from '../update-card-dialog/update-card-dialog.component';
import { DeleteCardDialogComponent } from '../delete-card-dialog/delete-card-dialog.component';
import { DatabaseService } from '../Services/database.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {
  questionUp = false;
  cardIdx = 0;
  @Input() cardData!: Flashcard;
  @Output() cardDeleteEvent = new EventEmitter<any>();
  @Output() refreshCardListEvent = new EventEmitter<any>();

  constructor(private dialogRef: MatDialog, private api: DatabaseService){}

  flipCard(){
    console.log("flip");
    this.questionUp = !this.questionUp;
  }


  updateCard(event: Event){
    let dialog = this.dialogRef.open(UpdateCardDialogComponent, {data: this.cardData});
    event.stopPropagation();
    dialog.afterClosed().subscribe(result => {
      if (result){
        this.refreshCardListEvent.emit(result);
      }
    })
  }

  deleteCard(event: Event){
    let dialog = this.dialogRef.open(DeleteCardDialogComponent);
    event.stopPropagation();
    dialog.afterClosed().subscribe(result => {  
      if (result){
        // this.api.deleteFlashcard(this.cardData.id).subscribe((data: any) => {
        //   console.log("Flashcard Deleted with ID: " + this.cardData.id);
        // })
        this.cardDeleteEvent.emit(this.cardData.id);
      }
    });
  }

}
