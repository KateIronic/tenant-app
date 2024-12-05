import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string; // Text displayed for the menu item
  link: string;  // Router link for navigation
  active?: boolean; // Optional flag to mark the menu item as active
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

   navItems: NavItem[] = [
    { label: 'Home', link: '/home' },
    { label: 'About', link: '/about' },
    { label: 'Courses', link: '/courses' },
  ];

  ngOnInit() {
    const isLoggedIn = !!localStorage.getItem('jwt'); // Simulated login check
    if (isLoggedIn) {
      this.navItems.push({ label: 'Profile', link: '/profile' });
    } else {
      this.navItems = this.navItems.filter((item) => item.label !== 'Profile');
    }
  }

  onRegister() {
    // Define any logic for the Register button, e.g., navigating to a register page
    console.log('Register button clicked!');
  }

  updateMenu(newNavItems: NavItem[]) {
    // This method allows dynamic updates to the navigation menu
    this.navItems = newNavItems;
  }

}
