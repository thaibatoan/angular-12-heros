import { Component } from '@angular/core';
import { IPosts } from './posts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPost: IPosts[] = [];

  onPostAdded(posts: IPosts) {
    this.storedPost.push(posts);
  }
}
