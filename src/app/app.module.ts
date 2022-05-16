import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JmitComponent } from './jmit/jmit.component';
import { VikasComponent } from './vikas/vikas.component';

@NgModule({
  declarations: [
    AppComponent,
    JmitComponent,
    VikasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
