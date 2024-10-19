import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatHeaderCell, MatHeaderCellDef, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { InsertAdvertismentCatComponent } from './insert-advertisment-cat/insert-advertisment-cat.component';
import { AdvertismentCat } from '../../Models/AdvertismentCat';
import { AdvertismentCatService } from './advertisment-cat.service';
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
  styleUrl: './advertisment-cat.component.css',
  providers:[AdvertismentCatService]
})
export class AdvertismentCatComponent implements AfterViewInit {

  ELEMENT_DATA: AdvertismentCat[]=[];
  displayedColumns: string[] = ['name', 'code', 'option'];
  dataSource = new MatTableDataSource<AdvertismentCat>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog:MatDialog,
    private _AdvertismentCatService:AdvertismentCatService
  ){
    this.BindGridData(); 
    
  }

  InsertModal(){
    const dialogRef = this.dialog.open(InsertAdvertismentCatComponent, {
      width:"50%",
      data: new AdvertismentCat(),
    });

    dialogRef.afterClosed().subscribe(result => {
      this.BindGridData();
    });
  }

  BindGridData(){
    this.ELEMENT_DATA=[];
    this._AdvertismentCatService.BindGridData().subscribe(res=>{
      this.ELEMENT_DATA=res;
    })
  }

  Delete(id:number){
    this._AdvertismentCatService.Delete(id).subscribe(res=>{
      this.BindGridData();
    },e=>{
      
    })
  }

  Edit(item:AdvertismentCat){
    const dialogRef = this.dialog.open(InsertAdvertismentCatComponent, {
      width:"50%",
      data: item,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.BindGridData();
    });
  }
}


