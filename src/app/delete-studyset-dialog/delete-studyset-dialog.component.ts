import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-studyset-dialog',
  templateUrl: './delete-studyset-dialog.component.html',
  styleUrls: ['./delete-studyset-dialog.component.css']
})
export class DeleteStudysetDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeleteStudysetDialogComponent>){}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
