import { Component } from '@angular/core';
import { defer, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly client$ = defer(
    () =>
      new Observable((observer: Observer<Sfdc.canvas.Client>) =>
        Sfdc.canvas(() => {
          Sfdc.canvas.oauth.init();
          observer.next(Sfdc.canvas.oauth.client());
        })
      )
  );
}
