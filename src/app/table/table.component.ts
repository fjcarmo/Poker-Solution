import { Component, OnInit } from '@angular/core';
import { TABLES } from '../shared/data/data';
import { Table } from '../shared/models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: Table[] = TABLES;
  tables: Table[] = [];
  table: Table;
  favoriteTables: number[] = [6, 1, 2, 3, 8, 4];

  constructor() { }

  ngOnInit(): void {
    this.setFavoriteTables(this.favoriteTables);
    this.getFavoriteTables();
  }

  setFavoriteTables(numberArray: number[]): void {
    this.tables.forEach(table => {
      table.isFavorite = false;
    });

    numberArray.forEach((item, i = 0) => {
      this.table = this.data.find(t => t.id === item);
      this.table.isFavorite = true;
      this.table.isFavoritePosition = i;
      i++;
    });
  }

  getFavoriteTables(): void {
    this.tables = this.data.filter(t => t.isFavorite)
      .sort((table1, table2) => table1.isFavoritePosition - table2.isFavoritePosition);
  }

  onTableSelected(table: string): void {
    switch (table) {
      case 'Open':
        this.tables = this.data.filter(t => t.id === 6);
        break;

      case 'vs 3Bet':
        this.tables = this.data.filter(t => t.id >= 7 );
        break;

      case 'vs MR':
        this.tables = this.data.filter(t => t.id === 1);
        break;

      case 'vs 2.5x':
        this.tables = this.data.filter(t => t.id === 2);
        break;

      case 'vs 3x':
        this.tables = this.data.filter(t => t.id === 3);
        break;

      case 'vs 4Bet':
        this.tables = this.data.filter(t => t.id === 4);
        break;

      case 'vs Limp':
        this.tables = this.data.filter(t => t.id === 5);
        break;

      case '':
        this.tables = this.data.filter(t => t.isFavorite)
          .sort((table1, table2) => table1.isFavoritePosition - table2.isFavoritePosition);
        break;

      default:
        break;
    }
  }

  onFavoriteSelected(value: number): void {
    this.setFavoriteTables([6, 1, 2, 3, Number(value), 4]);
  }
}
