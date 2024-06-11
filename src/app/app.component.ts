import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-error-handling';

  triggerError(): void {
    throw new Error('This is a demo error');
  }
}
