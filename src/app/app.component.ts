import { Component } from '@angular/core';
import { cardmodel } from './card/cardmodel.model';
import { mock_card_list } from './card/mock_card_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
  cards: cardmodel [] = [];

  constructor() {
    //put some code for fetching from backend
    for(var card_part of mock_card_list) {
      console.log(card_part);
      this.cards.push(card_part);
    }
  }
}
