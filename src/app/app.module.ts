import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketModule } from "./socket/socket.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsListComponent } from './components/items-list/items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
