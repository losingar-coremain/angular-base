import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatPaginator } from "@angular/material";
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

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // pageSize = 10;
  // lowValue = 1;
  // highValue = 100;
  // pageIndex = 0;

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

  // getPaginatorData(event) {
  //   if (event.pageIndex === this.pageIndex) {
  //     this.lowValue = this.lowValue + this.pageSize;
  //     this.highValue = this.highValue + this.pageSize;
  //   }

  //   if (event.pageIndex < this.pageIndex - 1) {
  //     this.lowValue = this.lowValue - this.pageSize;
  //     this.highValue = this.highValue - this.pageSize;
  //   }
  //   this.pageIndex = event.pageIndex + 1;
  // }
}
