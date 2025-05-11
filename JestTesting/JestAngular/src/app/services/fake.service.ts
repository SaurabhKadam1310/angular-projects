import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private readonly http:HttpClient) { }


  getData1() : Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return this.http.get(url);
  }

  getData2() : Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/todos/1";

    return this.http.get(url).pipe(
      tap((data:any)=>{
        console.log("Data Fetched"+data);
      }),
      catchError(this.handleError('Failed to fetch Data'))
    );
  }

  private handleError<T>(operation = "operation"){
      return (error: HttpErrorResponse): Observable<T> => {
        console.error(error);
        const message = `server returned code ${error.status} with body "${error.error}"`;
        throw new Error(`${operation} failed: ${message}`);
      }
  }

  postData1(data:any) : Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(data,url, httpOptions);
  }
}
