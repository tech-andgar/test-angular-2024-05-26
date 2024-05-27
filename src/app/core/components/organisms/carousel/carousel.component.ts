import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ProductCardComponent } from '../../components';

let nextId: number = 0;

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet, NgClass],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  public componentId: string | undefined = `carousel-id-${nextId++}`;

  @ContentChild(ProductCardComponent) panel!: ProductCardComponent;

  @ContentChildren(ProductCardComponent) panels!: QueryList<ProductCardComponent>;

  public items: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  public currentPage: number = 0;

  public itemMap: Map<number, any[]> | undefined;

  public itemKeys: number[] | undefined;

  public pageSize: number = 2;

  public numberOfPages: number = 0;

  public isNextDisabled: boolean = true;

  public isPrevDisabled: boolean = true;

  ngOnInit(): void {
    this.createSliderGroups();
    this.numberOfPages = Math.ceil(this.items.length / this.pageSize);
    this.calcButtonStates();
  }

  ngAfterViewInit(): void {
    this.items = this.panels.toArray() ;
    console.log(this.panels.toArray());
    this.createSliderGroups();
    this.numberOfPages = Math.ceil(this.items.length / this.pageSize);
    this.calcButtonStates();
  }

  public navToNext(): void {
    if (this.currentPage >= this.numberOfPages - 1) {
      this.reset();
    } else {
      this.currentPage = this.currentPage + 1;
      this.navigateToGroup(this.currentPage);
    }
  }

  public navToPrev(): void {
    this.currentPage = this.currentPage - 1;
    this.navigateToGroup(this.currentPage);
  }

  private navigateToGroup(groupId: number): void {
    this.calcButtonStates();
    const sliderGroup: Element | null = document.querySelector(
      `#${this.componentId}-group-${groupId}`
    );

    sliderGroup?.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }

  private createSliderGroups(): void {
    this.itemMap = new Map();
    let groupIndex: number = 0;

    for (let i: number = 0; i < this.items.length; i += this.pageSize) {
      const group: ProductCardComponent[] = this.items.slice(i, i + this.pageSize);

      this.itemMap.set(groupIndex, group);
      groupIndex++;
    }

    this.itemKeys = Array.from(this.itemMap.keys());
  }

  private reset(): void {
    this.currentPage = 0;
    this.navigateToGroup(this.currentPage);
  }

  private calcButtonStates(): void {
    this.isNextDisabled = this.currentPage + 1 >= this.numberOfPages;
    this.isPrevDisabled = this.currentPage <= 0;
  }
}
