import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatPaginator } from "@angular/material";
import { Observable, observable } from "rxjs";
import { Post } from "src/app/models/post.model";
import { PostService } from "src/app/services/post.service";
import { UserService } from "src/app/services/user.service";
import { DeleteConfirmComponent } from "../delete-confirm/delete.confirm.component";
import { EditConfirmComponent } from "../edit-confirm/edit.confirm.component";
import { PageEvent } from "@angular/material/paginator";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-post-list",
  templateUrl: "post.list.component.html",
  styleUrls: ["post.list.component.css"],
})
export class PostListComponent implements OnInit {
  [x: string]: any;
  public posts: Post[] = [];
  public selectedResult: Post[] = [];
  public users: User[] = [];
  length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  pageEvent: PageEvent;

  constructor(
    private postService: PostService,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(",")
        .map((str) => +str);
    }
  }

  getData(event?: PageEvent) {
    this.selectedResult = this.posts.slice(
      event.pageIndex * event.pageSize,
      event.pageIndex * event.pageSize + event.pageSize
    );
    return event;
  }

  ngOnInit() {
    this.postService.get().subscribe(
      (data) => {
        // Success
        this.posts = data;
        this.length = this.posts.length;
        this.selectedResult = this.posts.slice(0, this.pageSize);
      },
      (error) => {
        console.error(error);
      }
    );
    this.userService.get().subscribe(
      (data) => {
        // Success
        this.users = data;
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
      this.selectedResult = this.posts;
    } else {
      this.selectedResult = this.posts.filter((post) =>
        post.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
  }
}
