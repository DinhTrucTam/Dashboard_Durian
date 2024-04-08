import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DurianStagesDialogComponent } from '../durian-stages-dialog/durian-stages-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class DurianStagesDialogService {

    res: string;
    constructor(private dialog: MatDialog) { }

    openDialog(): void {
        const dialogRef = this.dialog.open(DurianStagesDialogComponent, {
            width: '600px', // Adjust width as needed
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog closed with result:', result);
            this.res = result;
            // You can handle the selected Durian stage here
        });
    }

    getResult(): string {
        return this.res;
    }
}
