import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import {BookFormComponent} from "./book-form/book-form.component";

const booksRoutes: Routes = [
  { path: 'books', component: BooksComponent, pathMatch: 'full' },
  { path: 'books/new', component: BookFormComponent},
  { path: 'books/:id', component: BookFormComponent}
];

export const booksRouting = RouterModule.forChild(booksRoutes);
