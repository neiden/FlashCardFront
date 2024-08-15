import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCardDialogComponent } from './create-card-dialog/create-card-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateCardDialogComponent } from './update-card-dialog/update-card-dialog.component';
import { DeleteCardDialogComponent } from './delete-card-dialog/delete-card-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    FlashcardComponent,
    CreateCardDialogComponent,
    UpdateCardDialogComponent,
    DeleteCardDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
