import { Component, HostListener, Input } from '@angular/core';

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

  @Input()
  itemsMenu: Array<ItemMenu> = [
    new ItemMenu({
      id: 'productManagerBtn',
      title: 'Product Manager',
      icon: 'fas fa-shopping-bag',
    }),
    new ItemMenu({
      id: 'constantManagerBtn',
      title: 'Constant Manager',
      icon: 'fas fa-border-all',
    }),
    new ItemMenu({
      id: 'orderManagerBtn',
      title: 'Order Manager',
      icon: 'fas fa-shopping-bag',
    }),
    new ItemMenu({
      id: 'tagManagerBtn',
      title: 'Tags Manager',
      icon: 'fas fa-tag',
    }),
  ];

  toggleMenu(): void {
    const menu = document.getElementById('menu');
    const menuText = document.querySelectorAll('.menuText');

    if (menu) {
      menu.classList.toggle('open');
      menuText.forEach((text, index) => {
        setTimeout(() => {
          text.classList.toggle('open2');
        }, index * 50);
      });
    }
  }
}

interface IItemMenu {
  id: string;
  title: string;
  icon: string;
}

class ItemMenu implements IItemMenu {
  id: string;
  title: string;
  icon: string;

  constructor({
    id: idItemMenu,
    title: nameItemMenu,
    icon: numberItemMenu,
  }: IItemMenu) {
    this.id = idItemMenu;
    this.title = nameItemMenu;
    this.icon = numberItemMenu;
  }
}
