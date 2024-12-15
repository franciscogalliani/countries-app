import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Output()
  onValue = new EventEmitter<string>();

  @Input()
  public placeholder:string = '';

  searchValue( value:string ):void {
    this.onValue.emit(value);
  }

}
