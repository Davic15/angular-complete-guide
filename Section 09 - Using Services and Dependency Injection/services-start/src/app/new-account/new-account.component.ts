import { Component } from '@angular/core';
import { AccountsService } from '../accounts.services';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(
    private logginService: LoggingService, 
    private accountsServices: AccountsService) {
      this.accountsServices.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      )
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsServices.addAccount(accountName, accountStatus);
    this.logginService.logStatusChange(accountStatus);
  }
}
