import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component'
import { ManagerModule } from './manager/manager.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manager', loadChildren:()=>ManagerModule},
  { path: 'user', loadChildren:()=>UserModule }, 
  { path: '**', component: PageNotFoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
