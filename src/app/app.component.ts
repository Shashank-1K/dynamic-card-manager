import { Component } from '@angular/core';
import { CardListComponent } from './card-list/card-list.component'; // Import the component

@Component({
  selector: 'app-root',
  standalone: true, // Set to true
  imports: [CardListComponent], // Import the CardListComponent here
  templateUrl: './app.component.html'
//   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-card-app';
}