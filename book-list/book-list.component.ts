import {Component, OnInit, ViewChild} from '@angular/core';
import {Students} from "../../models/Students";
import {MatPaginator} from "@angular/material/paginator";
import {StudentServiceService} from "../../services/student-service.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {DialogComponent} from "../../dialog/dialog.component";
import {Book} from "../../models/Book";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'description','edit', 'delete'];
  dataSource: any;
  book: Book[]=[];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(private bookService: BookService,
              private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getBookList();
  }
  getBookList(){
    this.bookService.getBookList().subscribe(bookList =>{
      this.book = bookList;
      console.log('list = > ', this.book);
      this.dataSource = new MatTableDataSource<Book>(this.book);
      this.dataSource.paginator = this.paginator;
    })
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() =>{
      // window.location.reload();
      this.getBookList();
    })
  }
  openDialog(id:number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteBook(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

}
