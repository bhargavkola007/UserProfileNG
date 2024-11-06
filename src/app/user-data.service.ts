// src/app/user-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserDTO {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'http://localhost:8080/api/user'; // Adjust this URL based on your API
  private user: UserDTO | null = null;
  private userSubject = new BehaviorSubject<UserDTO | null>(null);
  currentUser$ = this.userSubject.asObservable();
  constructor(private http: HttpClient) {}


  
  fetchUserProfile(email: string): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.apiUrl}/profile/${email}`);
  }

  setUser(user: UserDTO|null): void {
    this.user = user;
  }

  getUser(): UserDTO | null {
    return this.user;
  }
}
