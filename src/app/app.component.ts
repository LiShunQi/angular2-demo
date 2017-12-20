/**
 * Created by lsq on 2017/12/19.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: 'tour of Heros';
}
