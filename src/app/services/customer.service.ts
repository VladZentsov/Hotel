import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPaths, environment } from 'src/environments/environment';
import { BookFullInfo } from '../shared/BookFullInfo';
import { FreeBookDates } from '../shared/freeBookDates';
import { HttpHeaders } from '@angular/common/http';
import { BookCreateModel } from '../shared/BookCreateModel';
import { filter, map, of } from 'rxjs';
import { Book } from '../shared/Book';
import { Customer } from '../shared/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getCustomerById(id: string):Observable<Customer>{
    let url = `${this.baseUrl}${ApiPaths.Customer}`+'/'+id;

    let customer = this.httpClient.get<Customer>(url)

    return customer;
   }

}
