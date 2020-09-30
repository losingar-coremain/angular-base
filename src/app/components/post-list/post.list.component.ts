import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable, observable } from "rxjs";
import { Post } from "src/app/models/post.model";
import { PostService } from "src/app/services/post.service";
import { DeleteConfirmComponent } from "../delete-confirm/delete.confirm.component";
import { EditConfirmComponent } from "../edit-confirm/edit.confirm.component";

@Component({
  selector: "app-post-list",
  templateUrl: "post.list.component.html",
  styleUrls: ["post.list.component.css"],
})
export class PostListComponent implements OnInit {
  public posts: Post[] = [];
  public filteredPosts: Post[] = [];

  constructor(private postService: PostService, private dialog: MatDialog) {}

  ngOnInit() {
    this.postService.get().subscribe(
      (data) => {
        // Success
        this.posts = data;
        this.filteredPosts = this.posts;
      },
      (error) => {
        console.error(error);
      }
    );
  }

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

  filtrado(value: string) {
    if (!value) {
      this.filteredPosts = this.posts;
      console.log("Hola");
    } else {
      this.filteredPosts = this.posts.filter((post) =>
        post.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
  }
}
