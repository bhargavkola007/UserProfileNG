import { Component } from '@angular/core';
import { ChangePasswordDTO, UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  imports: [FormsModule,CommonModule]
})
export class ChangePasswordComponent {
  passwords: ChangePasswordDTO = { currentPassword: '', newPassword: '' };
  email: string = 'user@example.com'; // Replace with actual logged-in user's email
  message: string = ''; // To hold success or error messages
  isError: boolean = false; // To style the message differently for errors

  constructor(private userService: UserService) {}

  changePassword() {
    this.userService.changePassword(this.email, this.passwords).subscribe(
      () => {
        this.message = 'Password changed successfully!';
        this.isError = false;
        this.passwords = { currentPassword: '', newPassword: '' }; // Clear the fields
      },
      error => {
        this.message = 'Error changing password. Please try again.';
        this.isError = true;
        console.error(error);
      }
    );
  }
}
