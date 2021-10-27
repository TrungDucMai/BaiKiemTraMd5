import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../services/book.service";
import {Book} from "../../models/Book";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
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


