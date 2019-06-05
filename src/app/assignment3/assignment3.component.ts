import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment3',
    templateUrl: './assignment3.component.html',
    styleUrls: ['./assignment3.component.css']
    // styles: [`
    //     h3 {
    //         color : dodger-blue;
    //     }
    //     .white-text {
    //         color: white;
    //     }
    // `]
})
export class Assignment3Component{
    serverStatus = 'offline';
    serverId = 10;
    displayDetails = true;
    logs = [];

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    onToggleDetails() {
        this.displayDetails = !this.displayDetails;
        // this.logs.push(this.logs.length + 1);
        this.logs.push(new Date());
    }

    getServerStatusByServerId(serverStatus, serverId, serverName) {
        return 'with ID = ' + serverId + ' is --' + serverStatus + '--';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}