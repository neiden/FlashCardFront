import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-card-dialog',
  templateUrl: './delete-card-dialog.component.html',
  styleUrls: ['./delete-card-dialog.component.css']
})
export class DeleteCardDialogComponent {

  constructor(private dialogRef: MatDialogRef<DeleteCardDialogComponent>){}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
