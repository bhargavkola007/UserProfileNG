import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', // Ensure this path is correct
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports:[ProfileDropdownComponent]
})
export class NavbarComponent {
  constructor(private modalService: ModalService) {}

  openSettings(): void {
    this.modalService.openSettingsModal();
  }

  // Placeholder for logout functionality
  logout(): void {
    // Implement your logout logic here
    console.log("Logout successful");
  }
}
