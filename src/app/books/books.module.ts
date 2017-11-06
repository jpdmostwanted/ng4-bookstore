import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { BooksComponent } from './books.component';
import { BooksService } from './shared/books.service';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    BooksComponent,
    BookFormComponent
  ],
  exports: [
    BooksComponent
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
