import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() menuChange = new EventEmitter<string>();
  list = [
    ['PRODUCTS & SERVICES', 'fas fa-server fa-2x', 'productsAndServices'],
    ['SUPPORT & DOWNLOADS', 'fas fa-wrench fa-2x', 'supportAndDownloads'],
    ['TRAINING & EVENTS', 'fas fa-chalkboard-teacher fa-2x', 'trainingAndEvents'],
    ['BUY', 'fas fa-shopping-cart fa-2x', 'buy'],
    ['PARTNERS', 'fas fa-users fa-2x', 'partners']
  ];
  constructor(
    private menuServ: MenuService
  ) {
  }
  ngOnInit() {

  }
  showMenu(event, key) {
    event.preventDefault();
    this.menuChange.emit(key);
  }

}
