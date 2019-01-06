import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  styles: [
    `
      .app-container {
        fxlayout: column;
        margin-top: 32px;
      }
    `,
  ],

  template: `
    <div *ngIf="!(authService.authStatus | async).isAuthenticated">
      <app-login></app-login>
    </div>
    <div *ngIf="(authService.authStatus | async).isAuthenticated">
      <span class="mat-display-3">You get a lemon, you get a lemon...</span>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService){
    
  }

  ngOnInit() {
  
  }
}
