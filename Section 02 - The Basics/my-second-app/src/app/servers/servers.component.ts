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

  constructor() { }

  ngOnInit(): void {
  }

}
