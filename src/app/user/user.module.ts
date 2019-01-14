import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { LogoutComponent } from './logout/logout.component';
import { ProfileuserComponent } from './profileuser/profileuser.component';
import { UserMaterialModule } from './user.material.module';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from './user/user.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { SharedComponentModule } from '../shared.component.module';

@NgModule({
  declarations: [ 
    LogoutComponent, 
    ProfileuserComponent,
    
  ],
  imports: [
    CommonModule, 
    UserRoutingModule,
    UserMaterialModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedComponentModule,

  ],
  providers: [
    UserService,
    AuthGuard
  ],
})
export class UserModule {}

