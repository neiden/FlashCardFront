import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../Services/database.service';
import { Flashcard } from '../Models/flashcard.model';
import {MatDialog} from '@angular/material/dialog';
import { CreateCardDialogComponent } from '../create-card-dialog/create-card-dialog.component';
import { UpdateCardDialogComponent } from '../update-card-dialog/update-card-dialog.component';
import { DeleteCardDialogComponent } from '../delete-card-dialog/delete-card-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  tableMode = true;
  cardList: Flashcard[] = [];
  cardIdx = 0;
  currentCard = new Flashcard(-1, "","", -1);
  studySetId = 0;

  constructor(private api: DatabaseService, private dialogRef: MatDialog, private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("Params for feed: " + params);
      this.studySetId = params['id'];
      this.api.getStudySetFlashcards(this.studySetId).subscribe((data: any) => {
        console.log("Flashcards retrieved: " + JSON.stringify(data));
        this.cardList = data;
        if (this.cardList.length > 0){
          this.currentCard = this.cardList[0];
        }
      })
    });
  }

  setTableMode(){
    this.tableMode = !this.tableMode;
  }


  incrementCard(){
    this.cardIdx++;
    if (this.cardIdx > this.cardList.length - 1){
      this.cardIdx = 0;
    }
    this.currentCard = this.cardList[this.cardIdx];
  }

  decrementCard(){
    if (this.cardIdx - 1 < 0){
      this.cardIdx = this.cardList.length;
    }
    this.cardIdx--;
    this.currentCard = this.cardList[this.cardIdx];
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
    let dialog = this.dialogRef.open(CreateCardDialogComponent , {data: this.studySetId});
    dialog.afterClosed().subscribe(result => {
      if (result != null){
        console.log("Adding new card to cardList");
        this.cardList.push(result);
      }
    })
  }

  openUpdateCardDialog(card: Flashcard){
    let dialog = this.dialogRef.open(UpdateCardDialogComponent, {data: card});
    dialog.afterClosed().subscribe(result => {
      if (result){
        this.refreshCardList(result);
      }
    })
  }

  

  openDeleteCardDialog(id: number){
    let dialog = this.dialogRef.open(DeleteCardDialogComponent);
    dialog.afterClosed().subscribe(result => {
      if (result){
        this.deleteCard(id);
      }
    })
  }

  navigateBack(){
    this.router.navigate(['/home']);
  }

}
