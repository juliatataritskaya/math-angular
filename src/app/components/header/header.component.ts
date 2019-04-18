import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = 'console.log(\'done\');';
    s.src = 'assets/js/script.js';
    this.elementRef.nativeElement.appendChild(s);
  }

}
