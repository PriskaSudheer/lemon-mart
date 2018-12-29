import { Component, OnInit } from '@angular/core'

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
    <div class="app-container">
      <div fxLayout="column" fxLayoutAlign="center center">
        <span class="mat-display-2">Hello, Lemonite!</span>
        <button mat-raised-button color="primary" routerLink="/inventory">Login as inventory</button>
        <br>
        <button mat-raised-button color="primary" routerLink="/manager">Login as Manager</button>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  
  }
}
