import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-side-nav-middle',
  templateUrl: './side-nav-middle.component.html',
  styleUrls: ['./side-nav-middle.component.css']
})
export class SideNavMiddleComponent implements OnInit, OnChanges {
  @Input() menuKey: string;
  middleNav: any[];
  @Output() menuChange = new EventEmitter<any[]>();

  constructor(
    private menuServ: MenuService
  ) {
  }
  ngOnInit() {
    this.middleNav = this.menuServ[this.menuKey || 'productsAndServices'];
  }

  ngOnChanges(changes: SimpleChanges) {
    const key = changes.menuKey.currentValue;
    this.middleNav = this.menuServ[key];
  }

  showSubMenu(event, key) {
    event.preventDefault();
    this.menuChange.emit(key);

  }

}
