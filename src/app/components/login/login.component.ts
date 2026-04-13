import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Mock login function
   * @param event
   */
  onLogin(event: Event): void {
    event.preventDefault();
    console.log('Login successful! Redirecting...');
    this.router.navigate(['/dashboard']);
  }

  /**
   * Placeholder for social login (Google/Github)
   */
  socialLogin(provider: string): void {
    console.log(`Logging in with ${provider}...`);
    this.router.navigate(['/dashboard']);
  }

}