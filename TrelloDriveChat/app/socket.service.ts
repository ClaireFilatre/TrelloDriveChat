import { Injectable, EventEmitter } from '@angular/core';
import {Http, Response, JsonpModule} from "@angular/http";
import "rxjs/add/operator/toPromise";
 
@Injectable()
export class SocketService {
 
    private socket: WebSocket;
    private listener: EventEmitter<any> = new EventEmitter();
 
    public constructor() {
        this.socket = new WebSocket("ws://localhost:12345/ws");
        this.socket.onopen = event => {
            this.listener.emit({"type": "open", "data": event});
        }
        this.socket.onclose = event => {
            this.listener.emit({"type": "close", "data": event});
        }
        this.socket.onmessage = event => {
            this.listener.emit({"type": "message", "data": JSON.parse(event.data)});
        }
    }
 
    public send(data: any) {
        this.socket.send(data);
    }
 
    public close() {
        this.socket.close();
    }
 
    public getEventListener():any {
        return this.listener;
    }

}