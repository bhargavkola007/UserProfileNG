// src/app/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { UserDataService, UserDTO } from '../user-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports:[CommonModule],
  styleUrls: ['./profile.component.css'],
  standalone: true
})
export class ProfileComponent implements OnInit {
  user: UserDTO | null = null; // Initialize user as null
  email: string = 'johndoe@example.com'; // Set dynamically based on logged-in user

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.userDataService.fetchUserProfile(this.email).subscribe({
      next: (user) => {
        this.user = user; // Update user state with fetched data
      },
      error: (error) => {
        console.error('Error fetching user profile:', error);
      }
    });
  }
}
