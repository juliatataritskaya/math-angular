import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BaseHttpService} from './base.http.service';

@Injectable()
export class CurriculumService extends BaseHttpService {
  private static getGradesUrl = environment.serverUrl + '/grades';

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getGrades(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(CurriculumService.getGradesUrl, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

}
