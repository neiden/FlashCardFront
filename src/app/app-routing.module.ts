import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { Flashcard } from './Models/flashcard.model';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'flashcard/{id}', component: Flashcard}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
