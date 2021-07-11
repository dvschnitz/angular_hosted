import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularHosted';

  public items = ['This', 'is', 'a', 'mother', 'flipping', 'test.', 'I', 'came', 'here', 'to', 'drink', 'milk', 'and', 'kick', 'ass', 'and', 'I', 'just', 'finished', 'my', 'milk!',
    'This', 'is', 'a', 'mother', 'flipping', 'test.', 'I', 'came', 'here', 'to', 'drink', 'milk', 'and', 'kick', 'ass', 'and', 'I', 'just', 'finished', 'my', 'milk!'];
}
