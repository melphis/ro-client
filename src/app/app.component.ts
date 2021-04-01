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

  constructor(private socket: SocketService) {
    this.wip$ = socket.on$<boolean>('crawler.wip');
  }
}
