import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths, environment } from 'src/environments/environment';
import { BookFullInfo } from '../shared/BookFullInfo';
import { FreeBookDates } from '../shared/freeBookDates';
import { HttpHeaders } from '@angular/common/http';
import { BookCreateModel } from '../shared/BookCreateModel';
import { filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  private baseUrl = environment.baseUrl;

  getFreeBookDates(roomId: string): Observable<FreeBookDates>{
    let url = `${this.baseUrl}${ApiPaths.Book}`+'/freeBooksForRoom/'+roomId;
    // result: FreeBookDates
    // let freeBookDates = this.httpClient.get<FreeBookDates>(url)
    let freeBookDates = this.httpClient.get<FreeBookDates>(url)
    .pipe(
      map((frbdates: FreeBookDates)=>{
        frbdates.Days.forEach(element => {
          element[0] =new Date(element['Item1'].slice(0, 10))
          element[1] = new Date(element['Item2'].slice(0, 10))
        });
        return frbdates;
      })
    )



    freeBookDates.subscribe(result=>{
      console.log(result)})

    return freeBookDates;
  }

  addBook(book: BookCreateModel){

    let url = `${this.baseUrl}${ApiPaths.Book}${ApiPaths.CreateBook}`;

    console.log(url)

    let body = JSON.stringify(book);

    console.log(body)

    this.httpClient.post(url, body, this.httpOptions)
    .subscribe(response=> console.log(response))
    // .pipe(
    //   tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    //   catchError(this.handleError<Hero>('addHero'))
    // );
  }

}
