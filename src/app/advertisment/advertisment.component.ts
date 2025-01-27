import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Advertisment } from '../../Models/Advertisment';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AdvertismentInsUpComponent } from './advertisment-ins-up/advertisment-ins-up.component';
import { AdvertismentService } from './advertisment.service';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../Models/User';
import { Login } from '../../Models/Login';

@Component({
  selector: 'app-advertisment',
  standalone: true,
  imports: [NavbarComponent,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    RouterLink],
  templateUrl: './advertisment.component.html',
  styleUrl: './advertisment.component.css',
  providers:[AdvertismentService]
})
export class AdvertismentComponent {
  ELEMENT_DATA: Advertisment[]=[];
  displayedColumns: string[] = ['jobName', 'AdvertismentCatname', 'City','Rights','gender','option'];
  dataSource = new MatTableDataSource<Advertisment>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  userjson:string="";
  user:Login=new Login();
  constructor(public dialog:MatDialog,
    private _AdvertismentService:AdvertismentService,
    public router:Router,
    private cookieService:CookieService
  ){
    this.BindGridData();
  }

  BindGridData(){
    this._AdvertismentService.BindGriddata().subscribe(res=>{
      this.ELEMENT_DATA=res;
    })
  }

  Edit(id:number){
    this.router.navigate(["AdvertismentInsUp/"+id])
  }
  
  Delete(id:number){
    this._AdvertismentService.Delete(id).subscribe(res=>{
      this.BindGridData();
    })
  }
}

