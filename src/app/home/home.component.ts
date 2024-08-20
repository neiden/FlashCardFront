import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database.service';
import { StudySet } from '../Models/studyset.model';
import { MatDialog } from '@angular/material/dialog';
import { CreateStudysetDialogComponent } from '../create-studyset-dialog/create-studyset-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  studySets: StudySet[] = [];
  isSetEmpty = false;
  loadingSets = true;

  constructor(private api: DatabaseService, private dialogRef: MatDialog, private router: Router){}

  ngOnInit(): void {
      this.api.getAllStudySets().subscribe((sets: any) => {
        if (sets != null){
          this.studySets = sets;
          this.loadingSets = false;
        }
        else{
          this.isSetEmpty = true;
          this.loadingSets = false;
        }
      })
  }



  openCreateStudySetDialog(){
    let dialog = this.dialogRef.open(CreateStudysetDialogComponent);
    dialog.afterClosed().subscribe(result => {
      if (result != null){
        console.log("Adding new card to cardList");
        this.studySets.push(result);
      }
    })
  }



  
  deleteStudySet(setId: string){
    this.api.deleteStudySet(setId).subscribe((result:any) => {
      console.log("Deleted flashcard");
      this.studySets = this.studySets.filter((set) => set.id != setId);
    })
  }


  refreshStudySetList(studySet: StudySet){
    console.log("Attemping to update card with this card: " + JSON.stringify(studySet));
    let newStudyList = this.studySets.map((c) => {
      if (c.id == studySet.id){
        c.category = studySet.category;
      } 
      return c;
    });
    this.studySets = (newStudyList as any) as StudySet[];
    console.log(this.studySets);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


  
  
}


