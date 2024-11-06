// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserDataService, UserDTO } from '../user-data.service'; // Import UserDataService
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private userService: UserService,
    private userDataService: UserDataService, // Inject UserDataService
    private router: Router
  ) {}

  login(): void {
    this.userService.login(this.email, this.password).subscribe({
      next: (user: UserDTO) => {
        this.userDataService.setUser(user); // Set the user data in UserDataService
        this.router.navigate(['/profile']);
      },
      error: () => {
        this.errorMessage = 'Invalid email or password';
      },
    });
  }
}
