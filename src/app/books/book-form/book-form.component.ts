import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../shared/book';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  book: Book = new Book();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {
this.form =  new FormGroup({
 title : new FormControl(),
 description : new FormControl(),
 genre : new FormControl()
})
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
    var id = params['id'];

      this.title = id ? 'Edit Book' : 'New Book';

      if (!id)
        return;

      this.booksService.getBook(id)
        .subscribe(
          book => this.book = book,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
    bookValue = this.form.value;

    if (bookValue.id){
      result = this.booksService.updateBook(bookValue);
    } else {
      result = this.booksService.addBook(bookValue);
    }

    result.subscribe(data => this.router.navigate(['books']));
  }
}
