import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PosRoutingModule } from './pos-routing.module';
import { PoscomponentComponent } from './poscomponent/poscomponent.component'

@NgModule({
  declarations: [PoscomponentComponent],
  imports: [CommonModule, PosRoutingModule],
})
export class PosModule {}
