import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from "@angular/material/icon"

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage!: number ;
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();

  constructor() {}

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage += 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage -= 1);
    }
  }
}