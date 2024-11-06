import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDTO, UserService } from '../user.service';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  imports: [FormsModule, CommonModule]
})
export class EditProfileComponent implements OnInit {
  user: UserDTO = { name: '', email: '' };
  loading = true;
  saving = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private userService: UserService,
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.loading = true;
    this.errorMessage = '';

    this.userDataService.currentUser$.subscribe({
      next: (userData) => {
        if (userData) {
          this.user = { ...userData };
        } else {
          this.errorMessage = 'No user data found';
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading user profile:', error);
        this.errorMessage = 'Failed to load profile data';
        this.loading = false;
      }
    });
  }

  saveProfile() {
    if (!this.user.email) {
      this.errorMessage = 'Email is required';
      return;
    }

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.userService.updateProfile(this.user.email, this.user).subscribe({
      next: (updatedUser) => {
        this.saving = false;
        this.successMessage = 'Profile updated successfully';
        
        // Update the user data in the UserDataService
        this.userDataService.setUser(updatedUser);

        // Navigate back after showing the success message
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 1500);
      },
      error: (error) => {
        console.error('Error updating profile:', error);
        this.saving = false;
        this.errorMessage = 'Failed to update profile. Please try again.';
      }
    });
  }

  cancel() {
    this.router.navigate(['/profile']);
  }
}
