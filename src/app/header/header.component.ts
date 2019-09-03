import { Component } from '@angular/core';

@Component({
  selector: 'header-area',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  isCollapsed = true;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }  

}