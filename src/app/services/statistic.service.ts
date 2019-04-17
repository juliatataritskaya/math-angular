import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BaseHttpService} from './base.http.service';

@Injectable()
export class StatisticService extends BaseHttpService {
  private static getFirstStatisticsUrl = environment.serverUrl + '/statistics/number-of-completed-lessons-and-users';
  private static getSecondStatisticsUrl = environment.serverUrl + '/statistics/completed-users-at-all-lessons';
  private static getThirdStatisticsUrl = environment.serverUrl + '/statistics/count-of-user-and-unique-days-of-completed-lessons';
  private static getTotalUsersUrl = environment.serverUrl + '/statistics/count-of-completed-users';
  private static getTableDataStatisticsUrl = environment.serverUrl + '/statistics/user-ids';

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getFirstStatistics(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(StatisticService.getFirstStatisticsUrl, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public getSecondStatistics(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(StatisticService.getSecondStatisticsUrl, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public getThirdStatistics(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(StatisticService.getThirdStatisticsUrl, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public getTableData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(StatisticService.getTableDataStatisticsUrl, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public getTotalUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(StatisticService.getTotalUsersUrl, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

}
