import { Component, OnInit } from '@angular/core';
import {BooksService} from "./shared/books.service";
import {Book} from "./shared/book";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
    private books: Book[] = [];
  
    constructor(private booksService: BooksService) { }
  
    ngOnInit() {
      this.booksService.getBooks()
        .subscribe(data => this.books = data);
    }
  
    deleteUser(book){
      if (confirm("Are you sure you want to delete " + book.title + "?")) {
        var index = this.books.indexOf(book);
        this.books.splice(index, 1);
  
        this.booksService.deleteBook(book.id)
          .subscribe(null,
            err => {
              alert("Could not delete user.");
              // Revert the view back to its original state
              this.books.splice(index, 0, book);
            });
      }
    }
  }
