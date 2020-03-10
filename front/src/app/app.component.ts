import {Component, OnInit, LOCALE_ID, Inject} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'My Project';

  languageList = [ { code: 'pt', label: 'Português' } , { code: 'en', label: 'English' } ];

  constructor(@Inject(LOCALE_ID) protected localeId: string, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
