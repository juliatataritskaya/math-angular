import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseHttpService} from './base.http.service';

@Injectable()
export class ApplicationService extends BaseHttpService {
  private static postMessageUrl = '/sendEmail';

  constructor(protected http: HttpClient) {
    super(http);
  }

  public sendMessage(data): Promise<any> {
    return new Promise((resolve, reject) => {
      this.post(ApplicationService.postMessageUrl, {}, data, {responseType: 'text'})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }


}
