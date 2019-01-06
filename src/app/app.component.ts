import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { ObservableMedia } from '@angular/flex-layout'

@Component({
  selector: 'app-root',
  styles: [
    `.app-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   
  },


  `,
  ],

  template: `
    <div class="app-container">
      <mat-toolbar color="primary" fxLayoutGap="20px" class="app-toolbar">
        <button mat-icon-button><mat-icon>menu</mat-icon></button>
        <a mat-icon-button routerLink="/home"><h1>Lemon-mart</h1></a>
       <mat-icon  style="font-size: 16px !important" svgIcon="lemon"></mat-icon>
        <span class="flex-spacer"></span>

        <button  mat-mini-fab routerLink="/user/profileuser" 
        matTooltip="Profile" aria-label="User Profile">
          <mat-icon>account_circle</mat-icon>
        </button>

        <button  mat-mini-fab routerLink="/user/logout" 
         matTooltip="Logout" aria-label="Logout">
          <mat-icon>lock_open</mat-icon>
        </button>
      </mat-toolbar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'lemon-mart'

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public media: ObservableMedia
  ) {
    iconRegistry.addSvgIcon(
      'lemon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg')
    )
  }
}
