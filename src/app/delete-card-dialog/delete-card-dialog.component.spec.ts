import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardDialogComponent } from './delete-card-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('DeleteCardDialogComponent', () => {
  let component: DeleteCardDialogComponent;
  let fixture: ComponentFixture<DeleteCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCardDialogComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, FormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
