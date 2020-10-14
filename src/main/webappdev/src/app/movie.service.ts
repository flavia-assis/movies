import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl: string;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 
    this.movieUrl = 'http://localhost:8080/movie'
  }

  public getById(id: String): Observable<any> {
    const url = `${this.movieUrl}/${id}`
    
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched movie id=${id}`)),
      catchError(this.handleError<any>(`getMovie id=${id}`))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}