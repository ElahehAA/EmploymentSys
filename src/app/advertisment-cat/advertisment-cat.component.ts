import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatHeaderCell, MatHeaderCellDef, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { InsertAdvertismentCatComponent } from './insert-advertisment-cat/insert-advertisment-cat.component';
import { AdvertismentCat } from '../../Models/AdvertismentCat';
@Component({
  selector: 'app-advertisment-cat',
  standalone: true,
  imports: [NavbarComponent,
    MatButtonModule,
    MatTableModule,
     MatPaginatorModule,
     MatButtonToggleModule,
  ],
  templateUrl: './advertisment-cat.component.html',
  styleUrl: './advertisment-cat.component.css'
})
export class AdvertismentCatComponent implements AfterViewInit {


  displayedColumns: string[] = ['name', 'code', 'option'];
  dataSource = new MatTableDataSource<AdvertismentCat>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog:MatDialog){

  }

  InsertModal(){
      const dialogRef = this.dialog.open(InsertAdvertismentCatComponent, {
        width:"50%",
        data: new AdvertismentCat(),
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
        }
      });
    }
}

//testData
const ELEMENT_DATA: AdvertismentCat[] = [
  {Id:1,name: 'برنامه نویسی', code: 1},
  {Id:2,name: 'فناوری اطلاعات', code: 2},
  {Id:3,name: 'بازاریابی', code: 3},
];

