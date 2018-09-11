import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavMiddleComponent } from './side-nav-middle/side-nav-middle.component';
import { SideNavRightComponent } from './side-nav-right/side-nav-right.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SideNavMiddleComponent,
    SideNavRightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
