import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Table } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {
  @Input() table: Table;
  @Output() favoriteTable = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteSelection(value: any): void {
    this.favoriteTable.emit(value);
  }

}
