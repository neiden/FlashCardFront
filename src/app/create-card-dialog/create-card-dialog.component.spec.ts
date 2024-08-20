import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardDialogComponent } from './create-card-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('CreateCardDialogComponent', () => {
  let component: CreateCardDialogComponent;
  let fixture: ComponentFixture<CreateCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardDialogComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, FormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
