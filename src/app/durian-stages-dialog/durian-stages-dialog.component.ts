import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-durian-stages-dialog',
  templateUrl: './durian-stages-dialog.component.html',
  styleUrls: ['./durian-stages-dialog.component.css']
})
export class DurianStagesDialogComponent implements OnInit {
  public selectedStage: string; // Property to store the selected Durian stage
  stages = [ // Define your Durian stages here
    { value: 'Young Tree',      label: 'Stage 1: Young Tree' },
    { value: 'First Flowering', label: 'Stage 2: First Flowering' },
    { value: 'Fruit Bearing',   label: 'Stage 3: Fruit Bearing' },
    { value: 'Fruit Ripening',  label: 'Stage 4: Fruit Ripening' }
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
      //this.closeDialog(); // Close the dialog
      this.dialogRef.close(this.selectedStage);
    } else {
      // Handle case where no stage is selected
      console.error('No Durian stage selected.');
    }
  }
}
