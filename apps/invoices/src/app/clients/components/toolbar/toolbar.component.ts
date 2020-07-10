import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ViewType } from '../../types';

@Component({
  selector: 'invoices-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<string>();
  @Output() viewType = new EventEmitter<ViewType>();

  search = new FormControl('');
  view = new FormControl(ViewType.LIST);

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(300),
      )
      .subscribe((value) => this.searchTerm.emit(value));

    this.view.valueChanges
      .pipe(
        debounceTime(300),
      )
      .subscribe(value => this.viewType.emit(value));
  }

}
