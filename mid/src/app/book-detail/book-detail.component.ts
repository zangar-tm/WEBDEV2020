import { Component, OnInit,Input } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  constructor(
  private route: ActivatedRoute,
  private booksService: BooksService,
  private location: Location
  ) { }

  ngOnInit(): void {
  this.getBook();
  }
  getBook(): void {
   const id = +this.route.snapshot.paramMap.get('id');
   this.booksService.getBook(id)
     .subscribe(book => this.book = book);
 }
 goBack(): void {
   this.location.back();
 }
}
