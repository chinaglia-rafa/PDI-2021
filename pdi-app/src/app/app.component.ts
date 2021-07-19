import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'pdi-app';

  public menu = [
    { name: 'Editor de imagens', icon: 'home', link: '/editor' },
    { name: 'Sobre', icon: 'info', link: '/about' },
  ];
}
