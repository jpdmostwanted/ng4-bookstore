import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers,RequestMethod } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BooksService {

  private url: string = "http://localhost:50005/api/books";
  private headers : Headers;
  private options : RequestOptions;
  constructor(private http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
    this.options = new RequestOptions({method: RequestMethod.Post, headers: this.headers });
  }

  getBooks(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getBook(id){
    return this.http.get(this.getBookUrl(id))
      .map(res => res.json());
  }

  addBook(book){
    return this.http.post(this.url,this.serializeObj(book),this.options)
      .map(res => res.json());
  }

  updateBook(book){
    return this.http.post(this.getBookUrl(book.id), this.serializeObj(book),this.options)
      .map(res => res.json());
  }

  deleteBook(id){
    return this.http.post(this.url+'/delete/'+id,null)
      .map(res => res.json());
  }

  private getBookUrl(id){
    return this.url + "/" + id;
  }
  private serializeObj(obj) {
    var result = [];
    for (var property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
}
}
