import { Component, Input, OnChanges,OnInit} from '@angular/core';
import { IUser, User } from '../user/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-user',
  template: `
  <mat-card>
    <mat-card-header>
      <div mat-card-avatar><mat-icon>account_circle</mat-icon></div>
      <mat-card-title>{{currentUser.fullName}}</mat-card-title>
      
    </mat-card-header>
    <mat-card-content>

      <p><span class="mat-input bold">Date of Birth</span></p>
      <p>{{currentUser.dateOfBirth | date:'mediumDate'}}</p>
    </mat-card-content>
    <mat-card-actions *ngIf="!this.user">
      <button mat-button mat-raised-button>Edit</button>
    </mat-card-actions>
  </mat-card>
`,
  styles: [
    `    .bold {      font-weight: bold    }  `,],
})

export class ViewUserComponent implements OnChanges,OnInit {
  @Input() user: IUser
  currentUser = new User()
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    if (this.route.snapshot && this.route.snapshot.data['user']) {      
      this.currentUser = User.BuildUser(this.route.snapshot.data['user'])    
        this.currentUser.dateOfBirth = Date.now() // for data mocking purposes only    }
  }
}

  ngOnChanges() {
    if (this.user) {
      this.currentUser = User.BuildUser(this.user)
    }
  }
}