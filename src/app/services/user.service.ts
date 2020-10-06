import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  add(user: User) {
    const endpointUrl = `${this.baseUrl}`;
    return this.http.post<User>(endpointUrl, user);
  }
}
