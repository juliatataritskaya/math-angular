import {Component, OnInit} from '@angular/core';
import {SmsDialogComponent} from '../../components/sms-dialog/sms-dialog.component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private modalRef: NgbModalRef;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openSMSDialog() {
    this.modalRef = this.modalService.open(SmsDialogComponent, {size: 'sm', windowClass: 'animated fadeInDown'});
  }

}
