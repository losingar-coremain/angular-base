export class User {
  id: number;
  name: string;
  username: string;
  email: string;

  constructor(obj?: {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
  }) {
    this.name = (obj && obj.name) || undefined;
    this.id = (obj && obj.id) || undefined;
    this.email = (obj && obj.email) || undefined;
    this.username = (obj && obj.username) || undefined;
  }
}
