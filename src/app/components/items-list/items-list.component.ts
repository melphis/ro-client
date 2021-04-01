import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket/socket.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private socket: SocketService) {
    this.socket.get$('items.list');
  }

  ngOnInit(): void {
  }

}
