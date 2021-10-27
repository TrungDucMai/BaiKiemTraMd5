import { Component, OnInit } from '@angular/core';
import {Students} from "../../models/Students";
import {FormControl, Validators} from "@angular/forms";
import {StudentServiceService} from "../../services/student-service.service";
import {Book} from "../../models/Book";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  form: any = {};
  book?: Book;
  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }
  ngSubmit(){
    this.book = new Book(
      this.form.title,
      this.form.author,
      this.form.description
    )
    console.log(this.book)
    this.bookService.createBook(this.book).subscribe(data =>{
      console.log('data ==> ', data);
    })
  }
  onUploadAvatar($event: string) {
    this.form.avatarCategory = $event;
  }

}
