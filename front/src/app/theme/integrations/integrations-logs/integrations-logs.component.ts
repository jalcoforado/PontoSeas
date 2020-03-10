import { Component, OnInit } from '@angular/core';
import { TokenLogs } from 'src/Models/TokenLogs';
import { IntegrationsService } from '../integrations.service';

@Component({
  selector: 'integrations-logs',
  templateUrl: './integrations-logs.component.html',
  styleUrls: ['./integrations-logs.component.scss', '../../../../assets/icon/icofont/css/icofont.scss']
})
export class IntegrationsLogsComponent implements OnInit {
  public rowsOnPage = 10;
  public sortBy = '';
  public sortOrder = 'desc';
  public dataTokensLogs: TokenLogs[] = [];
  constructor(private _serviceIntegrations: IntegrationsService) { }

  ngOnInit() {
    this._serviceIntegrations.getLogs().then(x => this.dataTokensLogs = x)
  }

}
