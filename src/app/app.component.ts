import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HeaderComponent,
  FooterComponent,
  MainComponent,
} from '@components//components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent],
  // template: ``,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-angular-skandia';
}
