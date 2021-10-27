import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BT1Component } from './Components/Tuan02/bt1/bt1.component';
import { BT2Component } from './Components/Tuan02/bt2/bt2.component';
import { HoverComponent } from './Components/pages/hover/hover.component';
import { BT3Component } from './Components/Tuan02/bt3/bt3.component';
import { BT5Component } from './Components/Tuan02/bt5/bt5.component';
import { BT4Component } from './Components/Tuan02/bt4/bt4.component';

const routes: Routes = [
  { path: '', component: HoverComponent },
  { path: 'bt1', component: BT1Component },
  { path: 'bt2', component: BT2Component },
  { path: 'bt3', component: BT3Component },
  { path: 'bt4', component: BT4Component },
  { path: 'bt5', component: BT5Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
