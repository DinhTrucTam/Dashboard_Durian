import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-durian-stages-dialog',
  templateUrl: './durian-stages-dialog.component.html',
  styleUrls: ['./durian-stages-dialog.component.css']
})
export class DurianStagesDialogComponent implements OnInit {
  selectedStage: string; // Property to store the selected Durian stage
  stages = [ // Define your Durian stages here
    { value: 'stage1',  label: 'Stage 1: Seeding' },
    { value: 'stage2a', label: 'Stage 2A: Young Tree' },
    { value: 'stage2b', label: 'Stage 2B: First Flowering' },
    { value: 'stage3a', label: 'Stage 3A: Fruit Bearing' },
    { value: 'stage3b', label: 'Stage 3B: Fruit Ripening' }
  ];

  constructor(public dialogRef: MatDialogRef<DurianStagesDialogComponent>) { }

  ngOnInit(): void { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  confirmSelection(): void {
    if (this.selectedStage) {
      // You can perform any actions needed with the selected stage here
      console.log('Selected Durian stage:', this.selectedStage);
      this.closeDialog(); // Close the dialog
    } else {
      // Handle case where no stage is selected
      console.error('No Durian stage selected.');
    }
  }
}
