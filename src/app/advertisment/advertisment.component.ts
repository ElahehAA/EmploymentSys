import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AdvertismentGrid, AdvertismentInsUp } from '../../Models/Advertisment';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AdvertismentInsUpComponent } from './advertisment-ins-up/advertisment-ins-up.component';

@Component({
  selector: 'app-advertisment',
  standalone: true,
  imports: [NavbarComponent,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule],
  templateUrl: './advertisment.component.html',
  styleUrl: './advertisment.component.css'
})
export class AdvertismentComponent {
  
  displayedColumns: string[] = ['jobName', 'AdvertismentCatname', 'City','Rights','gender','option'];
  dataSource = new MatTableDataSource<AdvertismentGrid>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog:MatDialog){

  }

  InsertModal(){
      const dialogRef = this.dialog.open(AdvertismentInsUpComponent, {
        width:"50%",
        data: new AdvertismentInsUp(),
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
        }
      });
    }
}



//////// test

const ELEMENT_DATA: AdvertismentGrid[] = [
  {Id:1,jobName:'.netcore',AdvertismentCatname:'برنامه نویسی',City:'تبریز',gender:0},
  {Id:1,jobName:'Html/Css',AdvertismentCatname:'برنامه نویسی',City:'تبریز',gender:1},
];
