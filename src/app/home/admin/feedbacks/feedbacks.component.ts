import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface IFeedback {
  complaintID: string;
  description: string;
  satisfaction: string;
}

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['complaintID', 'satisfaction', 'description', 'details', 'update', 'delete'];
  dataSource: MatTableDataSource<IFeedback>;
  FEEDBACKS_DATA: IFeedback[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private router: Router,
              private http1: HttpClient) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.http1.post<any>(`http://localhost:3000/admin/get-feedbacks-details`, {}).subscribe(
      response => {
        this.FEEDBACKS_DATA = response.data;
        this.dataSource = new MatTableDataSource<IFeedback>(this.FEEDBACKS_DATA);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }, error => {
        console.log(error);
      }
    );
  }

  applyFilter(event): void {
    // console.log('event: ' + event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public redirectToDetails(id: string): void {
    console.log(id);
  }

  public redirectToUpdate(id: string): void {
    console.log(id);
  }

  public redirectToDelete(id: string): void {
    console.log(id);
  }

}


