import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PositionsListComponent} from './positions/positions-list/positions-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PositionsListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webCV';
}
