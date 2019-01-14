import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { AuthGuard } from '../auth/auth-guard.service';
import { SharedComponentModule } from '../shared.component.module';
import { UserTableComponent } from './user-table/user-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerMaterialModule } from './manager-material.module';
import { UserService } from '../user/user/user.service'
import { UserResolve } from '../user/user/user.resolve'
@NgModule({
  declarations: [
    ManagerHomeComponent, 
    ManagerComponent,
    UserManagementComponent, 
    ReceiptLookupComponent, UserTableComponent,
    
  ],
  imports: [
    CommonModule, 
    ManagerRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    SharedComponentModule,
    ReactiveFormsModule,
    ManagerMaterialModule,
  ],
 
  exports: [MatButtonModule, MatToolbarModule, MatIconModule], 
  providers: [AuthGuard,UserResolve,UserService],
})


export class ManagerModule {}
