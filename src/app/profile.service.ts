import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = '/api/user'; // Adjust your API URL

  constructor(private http: HttpClient) {}

  getProfile(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/${email}`);
  }
}
