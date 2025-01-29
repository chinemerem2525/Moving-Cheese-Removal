import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
NotificationService


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';  // Variable to hold the email input
  password: string = '';  // Variable to hold the password input

  constructor(private router: Router, private ns: NotificationService) {}  // Injecting the Router service

  ngOnInit(): void {
  }

    // Method to handle login
    onLogin() {
      // Check if the email and password match the predefined credentials
      if (this.username === 'movingcheeseremoval20010030@444' && this.password === 'movingchesseremovalbackend1001') {
        this.ns.showNotification('Logged In', 'success');
        this.router.navigate(['/InformationCockpitEnd']);  // Navigate to the dashboard on successful login
      } else {
        this.ns.showNotification('Invalid email or password', 'error');
      }
    }
}
