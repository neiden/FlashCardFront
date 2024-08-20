import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudysetDialogComponent } from './update-studyset-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('UpdateStudysetDialogComponent', () => {
  let component: UpdateStudysetDialogComponent;
  let fixture: ComponentFixture<UpdateStudysetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudysetDialogComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, FormsModule, ReactiveFormsModule, FormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStudysetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
