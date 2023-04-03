import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-added-snack',
  templateUrl: './task-added-snack.component.html',
  styleUrls: ['./task-added-snack.component.scss']
})
export class TaskAddedSnackComponent {
  snackBarRef = inject(MatSnackBarRef);
}
