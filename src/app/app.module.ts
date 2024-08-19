import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCardDialogComponent } from './create-card-dialog/create-card-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateCardDialogComponent } from './update-card-dialog/update-card-dialog.component';
import { DeleteCardDialogComponent } from './delete-card-dialog/delete-card-dialog.component';
import { StudysetComponent } from './studyset/studyset.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoadingindicatorComponent } from './loadingindicator/loadingindicator.component';
import { AuthInterceptor } from './auth-interceptor';
import { CreateStudysetDialogComponent } from './create-studyset-dialog/create-studyset-dialog.component';
import { DeleteStudysetDialogComponent } from './delete-studyset-dialog/delete-studyset-dialog.component';
import { UpdateStudysetDialogComponent } from './update-studyset-dialog/update-studyset-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    FlashcardComponent,
    CreateCardDialogComponent,
    UpdateCardDialogComponent,
    DeleteCardDialogComponent,
    StudysetComponent,
    LoginComponent,
    RegisterComponent,
    CreateStudysetDialogComponent,
    DeleteStudysetDialogComponent,
    UpdateStudysetDialogComponent,
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
    ReactiveFormsModule,
    LoadingindicatorComponent
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
