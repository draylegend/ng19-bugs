import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: ` <p>nav works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavComponent {}
