import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: ` <p>dashboard works 123!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {}
