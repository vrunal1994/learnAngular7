import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ServerComponent} from './server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

27774196765100001