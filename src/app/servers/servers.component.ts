import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server created!';
  serverName = 'test server';
  username = '';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;

  }

  onUpdateServerName(event: any) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
