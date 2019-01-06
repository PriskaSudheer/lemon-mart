import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ManagerModule } from './manager/manager.module'
import { InventoryModule } from './inventory/inventory.module'
import { PosModule } from './pos/pos.module'
import { UserModule } from './user/user.module'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SideNavComponent } from './side-nav/side-nav.component'
import { LayoutModule } from '@angular/cdk/layout'
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material'
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './material.module'
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, SideNavComponent,LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManagerModule,
    InventoryModule,
    PosModule,
    UserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, 
    
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
