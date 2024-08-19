import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Flashcard } from '../Models/flashcard.model';
import { StudySet } from '../Models/studyset.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  apiRoot = "http://localhost:5134/";
  constructor(private http: HttpClient) { }

  getAllFlashcards(){
    return this.http.get(this.apiRoot + "Flashcard")
  }

  getFlashcardById(id: number){
    return this.http.get(this.apiRoot + "Flashcard/" + id);
  }

  createFlashcard(card: Flashcard){
    return this.http.post(this.apiRoot + "Flashcard/create", card);
  }

  deleteFlashcard(id: number){
    return this.http.delete(this.apiRoot + "Flashcard/delete/" + id);
  }

  updateFlashcard(card: Flashcard){
    return this.http.put(this.apiRoot + "Flashcard/update", card);
  }

  getAllStudySets(){
    return this.http.get(this.apiRoot + "StudySet/userSets");
  }

  login(username: string, password: string){
    return this.http.post(this.apiRoot + "User/login", {username, password});
  }

  createAccount(username: string, password: string){
    return this.http.post(this.apiRoot + "User/register", {id: 0, username, password, passwordSalt: ""});
  }

  createStudySet(studySet: StudySet){
    return this.http.post(this.apiRoot + "StudySet", studySet);
  }

  getStudySetFlashcards(id: number){
    return this.http.get(this.apiRoot + "Flashcard/studySet/" + id);
  }

  updateStudySet(studySet: StudySet){
    return this.http.put(this.apiRoot + "StudySet", studySet);
  }

  deleteStudySet(id: number){
    return this.http.delete(this.apiRoot + "StudySet/" + id);
  }

}
