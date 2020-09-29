export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(obj?: {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
  }) {
    this.userId = (obj && obj.userId) || undefined;
    this.id = (obj && obj.id) || undefined;
    this.title = (obj && obj.title) || undefined;
    this.body = (obj && obj.body) || undefined;
  }
}
