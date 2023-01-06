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
import { Room } from '../shared/Room';
import { RoomCategory, RoomCategory2LabelMapping } from '../shared/RoomCategory';

@Component({
  selector: 'app-admin-room-edit',
  templateUrl: './admin-room-edit.component.html',
  styleUrls: ['./admin-room-edit.component.scss']
})
export class AdminRoomEditComponent implements OnInit {

  room?: RoomDetailed
  freeBookDates?: FreeBookDates
  caruselButtons?:number[];
  imgNumber?: number;
  fitstImg?: string;
  editForm!: FormGroup;

  currentRoom: Room
  editedRoom: Room

  public RoomCategory2LabelMapping = RoomCategory2LabelMapping;

  public fileTypes = Object.values(RoomCategory).filter(value => typeof value === 'number');;

  @ViewChild('fform') feedbackFormDirective: any;

  formErrors = {
    'Category': '',
    'Price': '',
    'VisitorsNumber': '',
    'Description': '',
    'viewImgName': '',
  }

  validationMessages = {
    'Category': {
      'required': 'Category is required.'
    },

    'Price': {
      'required': 'Price is required.'
    },
    'VisitorsNumber': {
      'required': 'Visitors number is required.'
    },

    'Description': {
      'required': 'Description name is required.',
      'minlength': 'Description name must be at least 2 charcters long',
      'maxlength': 'Description name cannot be more 1000 characters'
    },
    'telnum': {
      'required':'Tel. number is required.',
      'pattern':'Tel. number must contain only numbers.'
    },
    'viewImgName': {
      'required':'ImgName is required.'
    },

  }

  constructor(private route: ActivatedRoute, private roomService: RoomService, private bookService: BookService, private fb: FormBuilder) {
   }



  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params)=>this.roomService.getRoomDetailedById(params['id'])))
    .subscribe((room) => {
      this.currentRoom = room
      this.createForm();
      console.log(room)
      })
  }

  createForm(){
    this.editForm = this.fb.group({
      Category:[RoomCategory[this.currentRoom?.Category], Validators.required],
      Price:[this.currentRoom?.Price, Validators.required],
      VisitorsNumber:[this.currentRoom?.VisitorsNumber, Validators.required],
      Description:[this.currentRoom?.Description, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      viewImgName:[this.currentRoom?.viewImgName, Validators.required]
    })
    this.editForm.valueChanges
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
    this.room = this.editForm.value;
    let categoryId = RoomCategory[this.room.Category]
    this.room.Id = this.currentRoom.Id;
    this.room.Price = this.room.Price;

    this.roomService.updateRoom(this.room)

    // this.bookService.addBook(this.bookCreateModel)

    // this.editForm.reset({
    //   Category:'222',
    //   Price: '',
    //   VisitorsNumber: '',
    //   Description: 'tgtegtegtrd',
    //   viewImgName: '',
    // });

    this.feedbackFormDirective.resetForm()
  }
  onValueChanged(data?: any){
    if(!this.editForm){return;}
    const form = this.editForm;
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
