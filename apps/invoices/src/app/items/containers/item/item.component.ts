import { Component, OnInit } from '@angular/core';
import { LineItem } from '@invoices/api-interfaces';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'invoices-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: LineItem;

  constructor(private service: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params.itemId)
      )
      .subscribe(itemId => this.loadItem(itemId))
  }

  private loadItem(itemId: string) {
    this.service.loadItem(itemId)
      .subscribe(item => this.item = item);
  }

}
