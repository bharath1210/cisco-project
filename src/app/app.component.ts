import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciscoMenu';
  midleMenuKey: string;
  subMenuKey: any;

  handleMenuChange(event) {
    this.midleMenuKey = event;
  }

  handleSubMenuChange(event) {
     this.subMenuKey = event;
  }
}
