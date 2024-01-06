import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchPosts(query: string): Observable<any[]> {
    const searchUrl = `${this.apiUrl}/post?title=${query}`;
    
    return this.http.get<any[]>(searchUrl)
      .pipe(
        map((posts:any) => posts.data.filter((post:any) => post.title.toLowerCase().includes(query.toLowerCase()))),
        catchError(error => {
          console.error('Error during search:', error);
          return [];
        })
      );
  }
}
