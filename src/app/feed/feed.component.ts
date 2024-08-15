import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../Services/database.service';
import { Flashcard } from '../Models/flashcard.model';
import {MatDialog} from '@angular/material/dialog';
import { CreateCardDialogComponent } from '../create-card-dialog/create-card-dialog.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  tableMode = true;
  cardList: Flashcard[] = [];
  cardIdx = 0;

  constructor(private api: DatabaseService, private dialogRef: MatDialog){
  }

  ngOnInit(): void {
      this.api.getAllFlashcards().subscribe((data: any) => {
        console.log("Flashcards retrieved: " + JSON.stringify(data));
        this.cardList = data;
      })
  }



  incrementCard(){
    this.cardIdx++;
    if (this.cardIdx > this.cardList.length){
      this.cardIdx = 0;
    }
  }

  deleteCard(cardId: number){
    this.api.deleteFlashcard(cardId).subscribe((result:any) => {
      console.log("Deleted flashcard");
      this.cardList = this.cardList.filter((card) => card.id != cardId);
    })
  }


  refreshCardList(card: Flashcard){
    console.log("Attemping to update card with this card: " + JSON.stringify(card));
    let newCardList = this.cardList.map((c) => {
      if (c.id == card.id){
        c.question = card.question;
        c.answer = card.answer;
      } 
      return c;
    });
    this.cardList = (newCardList as any) as Flashcard[];
    console.log(this.cardList);
  }

  openCreateCardDialog(){
    let dialog = this.dialogRef.open(CreateCardDialogComponent);
    dialog.afterClosed().subscribe(result => {
      if (result != null){
        console.log("Adding new card to cardList");
        this.cardList.push(result);
      }
    })
  }

}
