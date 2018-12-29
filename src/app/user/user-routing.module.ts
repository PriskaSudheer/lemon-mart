import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LogoutComponent } from './logout/logout.component'
import { ProfileuserComponent } from './profileuser/profileuser.component';
const routes: Routes = [
  { path: 'profileuser', component: ProfileuserComponent },
  { path: 'logout', component: LogoutComponent }, 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
