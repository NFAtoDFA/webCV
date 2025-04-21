import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {PositionsService} from '../positions.service';

@Component({
  selector: 'app-positions-list',
  imports: [CommonModule],
  templateUrl: './positions-list.component.html',
  standalone: true,
  styleUrl: './positions-list.component.scss'
})
export class PositionsListComponent {
  constructor(readonly positionService: PositionsService) {
  }

}
