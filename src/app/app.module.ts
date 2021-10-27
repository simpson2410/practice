import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BT1Component } from './Components/Tuan02/bt1/bt1.component';
import { BT2Component } from './Components/Tuan02/bt2/bt2.component';
import { HoverComponent } from './Components/pages/hover/hover.component';
import { HeaderComponent } from './Components/pages/header/header.component';
import { BT3Component } from './Components/Tuan02/bt3/bt3.component';
import { BT5Component } from './Components/Tuan02/bt5/bt5.component';
import { BT4Component } from './Components/Tuan02/bt4/bt4.component';

@NgModule({
  declarations: [
    AppComponent,
    BT1Component,
    BT2Component,
    HoverComponent,
    HeaderComponent,
    BT3Component,
    BT5Component,
    BT4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
