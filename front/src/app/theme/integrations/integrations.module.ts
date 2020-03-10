import { IntegrationsService } from './integrations.service';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationsRoutingModule } from './integrations-routing.module';
import { IntegrationsTokensComponent } from './integrations-tokens/integrations-tokens.component';
import { IntegrationsLogsComponent } from './integrations-logs/integrations-logs.component';
import { IntegrationsApplicationsComponent } from './integrations-applications/integrations-applications.component';
import { IntegrationsPrincipalComponent } from './integrations-principal/integrations-principal.component';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [
    IntegrationsTokensComponent,
    IntegrationsLogsComponent,
    IntegrationsApplicationsComponent,
    IntegrationsPrincipalComponent
  ],
  imports: [
    CommonModule,
    IntegrationsRoutingModule,
    SharedModule,
    DataTableModule,
  ],
  providers: [
    IntegrationsService
  ]
})
export class IntegrationsModule { }
