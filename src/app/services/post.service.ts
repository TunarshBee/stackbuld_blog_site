import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private store: Store) {
  }

  getPosts(page: number = 0): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/post?page=${page}`);
  }

  getPostById(id: string): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/post/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/post/create`, post);
  }

  updatePost(id: string, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/post/${post.id}`, post);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/post/${id}`);
  }
}
