import { Component, Inject } from '@angular/core';
import { Advertisment } from '../../../Models/Advertisment';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { City } from '../../../Models/City';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AdvertismentCat } from '../../../Models/AdvertismentCat';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../../Services/location.service';
import { AdvertismentCatService } from '../../advertisment-cat/advertisment-cat.service';
import { AdvertismentService } from '../advertisment.service';

@Component({
  selector: 'app-advertisment-ins-up',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogContent,
    MatIcon,
    MatDialogTitle,
    MatDivider,
    MatRadioButton,
    MatRadioGroup,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
],
  templateUrl: './advertisment-ins-up.component.html',
  styleUrl: './advertisment-ins-up.component.css',
  providers:[LocationService,
    AdvertismentCatService,
    AdvertismentService
  ]
})
export class AdvertismentInsUpComponent {


  model:Advertisment=new Advertisment();
  cities:City[]=[];
  city:City=new City();
  cats:AdvertismentCat[]=[];
  id:string|null="";
  ID:number=0;
  IsEdit:boolean=false;
  StrGende:string="";

  constructor(private router:Router,
    private _LocationService:LocationService,
    private _AdvertismentCatService:AdvertismentCatService,
    private _AdvertismentService:AdvertismentService,
    private route: ActivatedRoute
  ){
    this.id=(this.route.snapshot.paramMap.get('id'));
    if(!!this.id){
      this.ID=parseInt(this.id);
      if(this.ID!=0){
        this.IsEdit=true;
        this.FindById(this.ID);
      }
    }
    this.BindCity();
    this.BindAdvertismentCat();
  }
  Insert(){
    this.model.gender=parseInt(this.StrGende);
    if(this.IsEdit==false){
      this._AdvertismentService.Insert(this.model).subscribe(res=>{
        alert("عملیات  با موفقیت انجام شد")
        this.router.navigate(["Advertisment"]);
      },e=>{
        alert(e.error)
      })
    }
    else{
      this._AdvertismentService.Update(this.model).subscribe(res=>{
        alert("عملیات  با موفقیت انجام شد")
        this.router.navigate(["Advertisment"]);
      },e=>{
        alert(e.error)
      })
    }
  }

  onNoClick(){
    this.router.navigate(["Advertisment"]);
  }

  BindCity(){
    this._LocationService.BindCities().subscribe(res=>{
      this.cities=res;
    })
  }

  BindAdvertismentCat(){
    this._AdvertismentCatService.BindGridData().subscribe(res=>{
      this.cats=res;
    })
  }

  FindById(ID:number){
    this._AdvertismentService.FindById(ID).subscribe(res=>{
      this.model=res;
      this.StrGende=res.gender.toString();
    })
  }
}
