import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { HttpModule, JsonpModule }  from '@angular/http';
// import {BeerList} from "./beerlist/beerList.component";
import { MessagerieComponent } from './messagerie/app.messagerie';
import { SocketService } from './socket.service';
import {Home} from './Home/home.component';
import {Trello} from './Trello/trello.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        JsonpModule,
        HttpModule
    ],
    declarations: [
      Home,
      MessagerieComponent,
      Trello
    ],
    bootstrap: [
      Home,
      MessagerieComponent,
      Trello
    ],
    providers: [SocketService],
})
export class AppModule {
}
