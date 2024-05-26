import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent implements OnInit {
  constructor() {}

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

  ngOnInit(): void {
    this.themeMode();
  }

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

  toggleTheme(): void {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    this.updateIcon();
  }

  themeMode(): void {
    if (localStorage.getItem('theme') !== null) {
      if (localStorage.getItem('theme') === 'light') {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
    }
    this.updateIcon();
  }

  updateIcon(): void {
    const dayNight = document.querySelector('#themeChangeBtn');
    if (dayNight) {
      const icon = dayNight.querySelector('i');
      if (icon) {
        if (document.body.classList.contains('dark')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
        } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
        }
      }
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
