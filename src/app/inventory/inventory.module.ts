import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CatagoriesComponent } from './catagories/catagories.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '../material.module'
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material'

@NgModule({
  declarations: [InventoryComponent, InventoryDashboardComponent, StockEntryComponent, ProductsComponent, CatagoriesComponent],
  imports: [
    CommonModule,
     InventoryRoutingModule,
     FlexLayoutModule,
     MaterialModule,
     MatButtonModule,
     MatToolbarModule,
     MatIconModule
    ],
})
export class InventoryModule {}
