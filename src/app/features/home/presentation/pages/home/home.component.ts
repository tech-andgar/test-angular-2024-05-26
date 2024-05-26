import { Component } from '@angular/core';
import {
  FooterComponent,
  HeaderComponent,
  MainComponent,
} from '@presentation-home/components/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
