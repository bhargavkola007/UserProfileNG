// src/app/profile-dropdown/profile-dropdown.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { UserDTO } from '../user-data.service'; // Ensure you import UserDTO from the correct path

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {
  isOpen = false;
  user: UserDTO | null = null; // Initialize user as null

  constructor(private router: Router, private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.currentUser$.subscribe(user => {
      this.user = user; // Update user from the observable
    });
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }

  onEditProfileClick(): void {
    this.router.navigate(['/edit-profile']);
    this.closeDropdown();
  }

  onProfileClick(): void {
    this.router.navigate(['/profile']);
    this.closeDropdown();
  }

  onSettingsClick(): void {
    this.router.navigate(['/settings']);
    this.closeDropdown();
  }

  onChangePasswordClick(): void {
    this.router.navigate(['/change-password']);
    this.closeDropdown();
  }

  onLogoutClick(): void {
    alert('Logout successful!');
    this.userDataService.setUser(null); // Clear user data on logout
    this.closeDropdown();
    this.router.navigate(['/login']);
  }
}
