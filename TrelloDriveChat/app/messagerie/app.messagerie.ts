import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from "../socket.service";
import {JsonpModule} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Component({
    selector: 'my-app',
    templateUrl: './app/messagerie/app.messagerie.html',
})
export class MessagerieComponent implements OnInit, OnDestroy {
    public messages: Array<any>;
    public chatBox: string;
    public sender: string;
    public reciever: string;

    public constructor(private socket: SocketService) {
        this.messages = [];
        this.chatBox = "";
        this.sender = "";
        this.reciever = "";
    }

    public ngOnInit() {
        
        this.socket.getEventListener().subscribe(event => {
            if (event.type == "message") {
                let data :string = event.data.content;
                this.messages.push(data);
            }
            if (event.type == "close") {
                this.messages.push("/The socket connection has been closed");
            }
            if (event.type == "open") {
                this.messages.push("/The socket connection has been established");
            }
        });
    }

    public ngOnDestroy() {
        this.socket.close();
    }

    public send(sender: string, reciever: string) {
        if (this.chatBox) {
            let dataObject = {
                sender: sender,
                reciever: reciever,
                text: this.chatBox
            }
            let data:string =JSON.stringify(dataObject);
            this.socket.send(data);
            this.chatBox = "";
        }
    }

    public isSystemMessage(message: any) {
        if (message.startsWith("/")) {
            return "<strong>" + message.substring(1) + "</strong>";
        }
        else {
            let data = JSON.parse(message)
            if (data.sender === this.sender || data.reciever === this.sender) {
                return data.sender + ":" + data.text;
            }
            else {
                return "Message is not for you"
            }
        }
    }
}