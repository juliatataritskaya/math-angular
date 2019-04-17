import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import * as $ from 'jquery';
import * as jQuery from 'jquery';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {ApplicationService} from './services/application.service';
import {SmsDialogComponent} from './components/sms-dialog/sms-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatNativeDateModule, MatTreeModule} from '@angular/material';
import {CurriculumService} from './services/сurriculum.service';
import {CdkTreeModule} from '@angular/cdk/tree';
import {CurriculumComponent} from './pages/curriculum/curriculum.component';
import {StatisticService} from './services/statistic.service';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ChartsModule} from 'ng2-charts';
import {StatisticsComponent} from './pages/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SmsDialogComponent,
    CurriculumComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,

    Ng2SmartTableModule,
    ChartsModule,

    MatNativeDateModule,
    CdkTreeModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [HeaderComponent],
  providers: [
    ApplicationService,
    CurriculumService,
    StatisticService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SmsDialogComponent],
})
export class AppModule {
}
