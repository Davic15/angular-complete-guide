import { Component, OnInit } from '@angular/core';

//* we can use template instead of templateUrl.
//* template can be used for some small code line (maybe three).
//* selector: [app-server] in this case this is an HTML attribute.
//* selector: .app-server select by class.
//* For components we use element style selector.
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatis = 'No server was created!.';
  serverName = '';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatis = 'Server was created!. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
