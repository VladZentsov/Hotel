import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { first, switchMap } from 'rxjs/operators';
import { BookService } from '../services/book.service';
import { RoomService } from '../services/room.service';
import { FreeBookDates } from '../shared/freeBookDates';
import { RoomDetailed } from '../shared/RoomDetails';

import { Form, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BookFullInfo } from '../shared/BookFullInfo';
import { BookCreateModel } from '../shared/BookCreateModel';
import { RoomFullnfo } from '../shared/RoomFullInfo';
import { Book } from '../shared/Book';
import { Customer } from '../shared/Customer';
import { CustomerService } from '../services/customer.service';
import { RoomCategory } from '../shared/RoomCategory';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const day = today.getDay();

@Component({
  selector: 'app-admin-room-detail',
  templateUrl: './admin-room-detail.component.html',
  styleUrls: ['./admin-room-detail.component.scss']
})
export class AdminRoomDetailComponent implements OnInit {

  room?: RoomDetailed
  freeBookDates?: FreeBookDates
  caruselButtons?:number[];
  imgNumber?: number;
  fitstImg?: string;
  bookForm!: FormGroup;
  bookCreateModel?: BookCreateModel;
  book:Book
  customer: Customer
  roomCategoryTitle: string

  @ViewChild('fform') feedbackFormDirective: any;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  }

  validationMessages = {
    'firstname': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least 2 charcters long',
      'maxlength': 'First name cannot be more 25 characters',
    },

    'lastname': {
      'required': 'Last name is required.',
      'minlength': 'Last name must be at least 2 charcters long',
      'maxlength': 'Last name cannot be more 25 characters'
    },
    'telnum': {
      'required':'Tel. number is required.',
      'pattern':'Tel. number must contain only numbers.'
    },
    'email': {
      'required':'Email is required.',
      'email':'Email not in valid format.'
    },

  }

  constructor(private route: ActivatedRoute, private roomService: RoomService, private customerService: CustomerService, private bookService: BookService, private fb: FormBuilder) {
    this.createForm();
   }



  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params)=>this.bookService.getBookById(params['id'])))
    .subscribe((book) => {
      this.book = book
      this.roomService.getRoomDetailedById(book.RoomId).subscribe((room)=>{
        this.room = room
        this.roomCategoryTitle = RoomCategory[this.room?.Category]
      })
      this.customerService.getCustomerById(book.CustomerId).subscribe((customer)=>this.customer = customer)
      })

  }

  createForm(){
    this.bookForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      startDate: new FormControl(new Date(year, month, day+4)),
      endDate: new FormControl(new Date(year, month, day+5)),
    })
    this.bookForm.valueChanges
      .subscribe(date => this.onValueChanged(date))

    this.onValueChanged();
  }

  myFilter = (d: Date | null): boolean => {
    if(this.freeBookDates==undefined){
      let now = new Date(new Date().valueOf()-24*60*60*1000)
      if(d>=now)
        return true
      else
        return false
    }
    let result = false
    this.freeBookDates.Days.forEach(element => {
      let first = new Date(element[0].valueOf()-24*60*60*1000)
      if (d>=(first) && d<=element[1]){
        result = true
      }
    });

    return result
  };

  onSubmit(){
    this.bookCreateModel = this.bookForm.value;
    this.bookCreateModel.RoomId = this.room.Id;
    this.bookCreateModel.Price = this.room.Price;

    console.log(this.bookCreateModel);

    this.bookService.addBook(this.bookCreateModel)

    this.bookForm.reset({
      firstname:'',
      lastname: '',
      telnum: '',
      email: '',
    });

    this.feedbackFormDirective.resetForm()
  }
  onValueChanged(data?: any){
    if(!this.bookForm){return;}
    const form = this.bookForm;
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        this.formErrors[field] = '';
        const control = form.get(field)
        if(control && control.dirty && !control.valid){
          const message = this.validationMessages[field]
          for (const key in control.errors){
            if (control.errors.hasOwnProperty(key)){
              this.formErrors[field] += message[key] + ' '
            }
          }
        }

      }
    }
  }


}
