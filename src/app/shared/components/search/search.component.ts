import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholder = '';
  @Output() searchResult = new EventEmitter<string>();
  search = '';

  searchTerm() {
    this.searchResult.emit(this.search);
  }
}

