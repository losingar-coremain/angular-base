import { Component, OnInit } from "@angular/core";
import { Observable, observable } from "rxjs";
import { Post } from "src/app/models/post.model";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "post.list.component.html",
  styleUrls: ["post.list.component.css"],
})
export class PostListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.get().subscribe(
      (data) => {
        // Success
        this.posts = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
