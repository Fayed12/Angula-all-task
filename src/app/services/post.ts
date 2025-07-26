import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipost } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Post {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getposts(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.apiUrl);
  }

  addpost(post: Omit<Ipost, 'id'>): Observable<Ipost> {
    return this.http.post<Ipost>(this.apiUrl, post); // يضيف البوست ويرجع البوست الجديد
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
