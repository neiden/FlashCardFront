import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudysetDialogComponent } from './create-studyset-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CreateStudysetDialogComponent', () => {
  let component: CreateStudysetDialogComponent;
  let fixture: ComponentFixture<CreateStudysetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudysetDialogComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, FormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudysetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
