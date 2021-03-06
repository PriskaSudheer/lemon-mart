import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component'
import { ManagerModule } from './manager/manager.module';
import { UserModule } from './user/user.module';
import { PosModule } from './pos/pos.module';
import { InventoryModule } from './inventory/inventory.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard.service';

  const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:redirectUrl', component: LoginComponent },
  {
    path: 'manager',
    loadChildren: () => ManagerModule,
    canLoad: [AuthGuard],
  },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'pos', loadChildren: () => PosModule },
  { path: 'inventory', loadChildren: () => InventoryModule },
  { path: '**', component: PageNotFoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
