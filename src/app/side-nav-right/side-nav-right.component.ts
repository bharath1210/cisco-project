import { Component, OnInit, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { SubMenuItems } from '../sub-menu';

@Component({
  selector: 'app-side-nav-right',
  templateUrl: './side-nav-right.component.html',
  styleUrls: ['./side-nav-right.component.css']
})
export class SideNavRightComponent implements OnInit, OnChanges {
  @Input() menuKey: any;
  menuItems: any = {};

  constructor(
    private menuserv: SubMenuItems
  ) {

  }
  ngOnInit() {
    this.menuItems = this.menuserv[this.menuKey];
  }
  ngOnChanges(changes: SimpleChanges) {
    const key = changes.menuKey.currentValue;
    this.menuItems = this.menuserv[key];
  }
}
