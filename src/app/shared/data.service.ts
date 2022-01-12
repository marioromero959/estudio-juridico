import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  private apiURL = '';

  constructor(private http: HttpClient) {}

    //getData(): Observable<Data[]> {
    //return this.http.get<Data[]>(`${this.apiURL}/`);
  }

