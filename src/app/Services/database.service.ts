import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Flashcard } from '../Models/flashcard.model';

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

}
