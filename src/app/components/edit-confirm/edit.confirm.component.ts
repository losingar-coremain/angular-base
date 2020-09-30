import { Component } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Inject } from "@angular/core";

@Component({
  selector: "app-edit-confirm",
  templateUrl: "edit.confirm.component.html",
  styleUrls: ["edit.confirm.component.css"],
})
export class EditConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<EditConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
