import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private baseUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Post[]>(`${this.baseUrl}`);
  }

  add(post: Post) {
    const endpointUrl = `${this.baseUrl}`;
    return this.http.post<Post>(endpointUrl, post);
  }
}
