import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './core/components/navbar/navbar.component';
// import { HeroComponent } from './features/hero/hero.component';
// import { AuthComponent } from './auth/auth.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tenantApp';
}
