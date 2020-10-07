import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Post } from "src/app/models/post.model";
import { DeleteConfirmComponent } from "../../delete-confirm/delete.confirm.component";
import { EditConfirmComponent } from "../../edit-confirm/edit.confirm.component";
@Component({
  selector: "app-post-detail",
  templateUrl: "post.detail.component.html",
  styleUrls: ["post.detail.component.css"],
})
export class PostDetailComponent {
  constructor(private dialog: MatDialog) {}
  @Input() post: Post;
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: "300px",
    });
  }
  openEditDialog(data): void {
    const dialogRef = this.dialog.open(EditConfirmComponent, {
      width: "500px",
      data: data,
    });
  }
}
