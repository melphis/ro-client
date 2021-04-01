import { Component } from '@angular/core';
import { SocketService } from './socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parser';

  constructor(private socket: SocketService) {

  }
}
