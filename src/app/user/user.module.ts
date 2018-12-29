import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module';

import { LogoutComponent } from './logout/logout.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ProfileuserComponent } from './profileuser/profileuser.component'

@NgModule({
  declarations: [ LogoutComponent, NavigationMenuComponent, ProfileuserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
