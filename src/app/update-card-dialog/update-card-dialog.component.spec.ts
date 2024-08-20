import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardDialogComponent } from './update-card-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('UpdateCardDialogComponent', () => {
  let component: UpdateCardDialogComponent;
  let fixture: ComponentFixture<UpdateCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCardDialogComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
