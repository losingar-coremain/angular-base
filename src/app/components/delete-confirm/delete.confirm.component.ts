import { Inject } from "@angular/core";
import { Component } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-delete-confirm",
  templateUrl: "delete.confirm.component.html",
  styleUrls: ["delete.confirm.component.css"],
})
export class DeleteConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
