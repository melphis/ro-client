import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { filter, first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface IMessage {
  event: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private ws: WebSocketSubject<IMessage>;

  constructor() {
    this.ws = webSocket('ws://localhost:3000/api');
    this.ws.subscribe();
  }

  // tslint:disable-next-line:typedef
  send(event: string, data: any = {}) {
    this.ws.next({event, data});
  }

  get$<T>(event: string, data: any = {}): Observable<T> {
    this.send(event, data);
    return this.one$<T>(event);
  }

  on$<T>(event: string): Observable<T> {
    return this.ws.pipe(
      filter((val: any) => val.event === event),
      map((val: IMessage) => val.data as T)
    );
  }

  one$<T>(event: string): Observable<T> {
    return this.ws.pipe(
      /*tap((val: IMessage) => {
        console.log('Tap from one', val);
      }),*/
      first((val: IMessage) => val.event === event),
      map((val: IMessage) => val.data as T)
    );
  }
}
