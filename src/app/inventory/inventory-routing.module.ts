import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InventoryComponent } from './inventory.component'
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component'
import { ProductsComponent } from './products/products.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'
import { CatagoriesComponent } from './catagories/catagories.component'

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
      { path: 'home', component: InventoryDashboardComponent },
      { path: 'products', component: ProductsComponent},
      { path: 'stockEntry', component: StockEntryComponent},
      { path: 'categories', component: CatagoriesComponent},

      
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
