import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BooksService {

  private url: string = "http://localhost:3000/api/books";

  constructor(private http: Http) { }

  getBooks(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getBook(id){
    return this.http.get(this.getBookUrl(id))
      .map(res => res.json());
  }

  addBook(book){
    return this.http.post(this.url, JSON.stringify(book))
      .map(res => res.json());
  }

  updateBook(book){
    return this.http.put(this.getBookUrl(book._id), JSON.stringify(book))
      .map(res => res.json());
  }

  deleteBook(id){
    return this.http.delete(this.getBookUrl(id))
      .map(res => res.json());
  }

  private getBookUrl(id){
    return this.url + "/" + id;
  }
}
