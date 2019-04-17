import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationService} from '../../services/application.service';

@Component({
  selector: 'app-sms-dialog',
  templateUrl: './sms-dialog.component.html'
})

export class SmsDialogComponent {
  email: string = '';
  constructor(public activeModal: NgbActiveModal, private applicationService: ApplicationService) { }

  send() {
    this.applicationService.sendMessage({email: this.email}).then((res) => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
