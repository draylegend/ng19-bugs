import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet name="nav" /><router-outlet />`,
  imports: [RouterOutlet],
})
export class AppComponent {}