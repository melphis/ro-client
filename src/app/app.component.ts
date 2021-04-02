import { Component } from '@angular/core';
import { SocketService } from './socket/socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parser';
  wip$: Observable<boolean>;
  pageParsed$: Observable<number>;

  constructor(private socket: SocketService) {
    this.wip$ = this.socket.on$<boolean>('crawler.wip');
    this.pageParsed$ = this.socket.on$('crawler.pageParsed');
  }
}
