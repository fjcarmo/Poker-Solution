import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  sbOptions: string[] = [];
  bbOptions: string[] = [];
  @Output() tableSelected = new EventEmitter<string>();
  playable: boolean | null = null;
  rng = 0;

  constructor() { }

  ngOnInit(): void {
    this.setDropdownOptions();
  }

  setDropdownOptions(): void {
    this.sbOptions = ['Select SB', 'Open', 'vs 3Bet'];
    this.bbOptions = ['Select BB', 'vs Limp', 'vs MR', 'vs 2.5x', 'vs 3x', 'vs 4Bet'];
  }

  onTableSelected(value: string): void {
    this.tableSelected.emit(value);
  }

  calculateRng(odds: number): void {
    this.rng = (Math.floor(Math.random() * 101));
    this.playable = this.rng <= odds;
  }

}
