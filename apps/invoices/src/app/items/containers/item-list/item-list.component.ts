import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LineItem } from '@invoices/api-interfaces';
import { debounceTime, tap } from 'rxjs/operators';
import { ItemListService } from '../../services/item-list.service';

@Component({
  selector: 'invoices-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: LineItem[] = [];
  search = new FormControl('');

  pageIndex = 0;
  pageSize = 5;

  pageSizeOptions = [3, 5, 10];

  constructor(private service: ItemListService) { }

  ngOnInit(): void {
    this.loadItems('', this.pageIndex + 1, this.pageSize);
    this.search.valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.pageIndex = 0),
      )
      .subscribe(value => this.loadItems(value, this.pageIndex + 1, this.pageSize));
  }

  reloadItems({ pageIndex, pageSize} : { pageIndex: number, pageSize: number }) {
    this.loadItems(this.search.value, pageIndex, pageSize);

  }

  private loadItems(product, page, perPage) {
    this.service.loadItems(page + 1, perPage, product)
      .pipe(
        // update paging
        tap(() => {
          this.pageIndex = page;
          this.pageSize = perPage;
        })
      )
      .subscribe(items => {
        console.log(items, 'loaded product');

        this.items = items;
      });
  }
}
