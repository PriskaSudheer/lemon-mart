import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '../material.module'
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material'
@NgModule({
  declarations: [
    ManagerHomeComponent, 
    ManagerComponent,
    UserManagementComponent, 
    ReceiptLookupComponent
  ],
  imports: [
    CommonModule, 
    ManagerRoutingModule,
    FlexLayoutModule,
    MaterialModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
 
  exports: [MatButtonModule, MatToolbarModule, MatIconModule], 

})


export class ManagerModule {}
