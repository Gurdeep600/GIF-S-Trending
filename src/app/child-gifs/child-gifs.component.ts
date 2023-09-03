import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-gifs',
  templateUrl: './child-gifs.component.html',
  styleUrls: ['./child-gifs.component.scss']
})
export class ChildGifsComponent {
  @Input() gifs!: any[];        // Input property to receive an array of GIFs from the parent
  @Input() dataLength: any;      // Input property to receive the total length of data (for pagination)
  page: number = 1;              // Current page number for pagination
}