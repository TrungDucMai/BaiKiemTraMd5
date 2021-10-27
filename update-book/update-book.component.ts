import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book";
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
 book : any;
  constructor(private atRouter: ActivatedRoute,
              private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(ctgId => {
      // @ts-ignore
      const id = +ctgId.get('id');
      console.log('id == ', id);
      this.bookService.detailBook(id).subscribe(ctg => {
        this.book = ctg;
      });
    });
  }

  ngSubmit() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(data => {
    });
  }

}
