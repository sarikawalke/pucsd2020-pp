import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";
import { User } from './user';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "webapi/v1/";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }
  public getById(id : string) {
    return this.httpClient.get(this.REST_API_SERVER +"/"+ id);
  }
  public insertUser(data) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpClient.post(this.REST_API_SERVER, data, options).pipe(catchError(this.handleError));
  }
getUser() {
    return this.httpClient.get(this.REST_API_SERVER + 'user')
    //console.log();
  }
   
  deleteUser(id) {
    //console.log("delete Product id : "+id);
    return this.httpClient.delete(this.REST_API_SERVER + 'user/' + id)
  }

createUser(users: { first_name: string; last_name: string; password: string }) {
    return this.httpClient.post(this.REST_API_SERVER + 'user', JSON.stringify(users))

  }
  }

  