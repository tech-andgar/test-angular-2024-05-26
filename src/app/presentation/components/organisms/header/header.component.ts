import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @HostListener('window:scroll', []) onWindowScroll() {
    if (window.scrollY > this.sticky!) {
      this.header?.classList.add('sticky');
    } else {
      this.header?.classList.remove('sticky');
    }
  }

  header = document.getElementById('myHeader');
  sticky = this.header?.offsetTop;
}
