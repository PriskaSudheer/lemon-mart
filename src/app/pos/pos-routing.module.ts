import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PoscomponentComponent } from './poscomponent/poscomponent.component';

const routes: Routes = [
  { path: 'pos', component: PoscomponentComponent }, 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosRoutingModule {}
