import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App Boilerplate';

  constructor(public themeService: ThemeService) {}
}
