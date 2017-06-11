import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';

import { SocketService } from './socket.service';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { Drive } from './Drive/drive.component';
import { Home } from './Home/home.component';
import { Messagerie } from './Messagerie/messagerie.component';
import { Projet } from './Projet/projet.component';
import { Trello } from './Trello/trello.component';

import { Commun } from './Commun/commun.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    routing
  ],
  declarations: [
    Commun,
    AppComponent,
    Drive,
    Home,
    Messagerie,
    Projet,
    Trello
  ],
  bootstrap: [
    AppComponent,
    Commun
  ],
  providers: [SocketService],
})
export class AppModule {
}
