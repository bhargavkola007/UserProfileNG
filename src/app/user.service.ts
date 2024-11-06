import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserDTO {
  name: string;
  email: string;
}

export interface ChangePasswordDTO {
  currentPassword: string;
  newPassword: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  getProfile(email: string): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.apiUrl}/profile/${email}`);
  }

  updateProfile(email: string, userData: UserDTO): Observable<UserDTO> {
    return this.http.put<UserDTO>(`${this.apiUrl}/${email}/update`, userData);
  }

  // src/app/user.service.ts
login(email: string, password: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, { email, password });
}

  changePassword(email: string, passwords: ChangePasswordDTO): Observable<any> {
    return this.http.put(`${this.apiUrl}/change-password/${email}`, passwords);
  }
}
