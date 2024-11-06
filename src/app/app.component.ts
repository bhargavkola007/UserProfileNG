import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[NavbarComponent,RouterModule,SettingsComponent,HttpClientModule,ProfileDropdownComponent,CommonModule]
})
export class AppComponent {
 title = 'UserProfile';

 isLoggedIn = true;

 constructor(private router: Router) {
   // Detect route changes to adjust isLoggedIn status
   this.router.events.subscribe((event) => {
     if (event instanceof NavigationEnd) {
       this.isLoggedIn = event.url !== '/login';
     }
   });
 }

}
