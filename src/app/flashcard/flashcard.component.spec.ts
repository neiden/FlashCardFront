import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardComponent } from './flashcard.component';
import { HttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';

describe('FlashcardComponent', () => {
  let component: FlashcardComponent;
  let fixture: ComponentFixture<FlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, MatCardModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
