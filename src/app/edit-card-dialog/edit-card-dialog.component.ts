import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Card } from '../card.interface';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // <-- IMPORT ADDED HERE

@Component({
  selector: 'app-edit-card-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule // <-- ADDED TO IMPORTS ARRAY
  ],
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.css']
})
export class EditCardDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) {
    this.form = this.fb.group({
      title: [data.title, Validators.required],
      description: [data.description, Validators.required]
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
