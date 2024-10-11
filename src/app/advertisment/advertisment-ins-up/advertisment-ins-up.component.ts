import { Component, Inject } from '@angular/core';
import { AdvertismentInsUp } from '../../../Models/Advertisment';
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
  styleUrl: './advertisment-ins-up.component.css'
})
export class AdvertismentInsUpComponent {


  model:AdvertismentInsUp=new AdvertismentInsUp();
  cities:City[]=[
    {Id:1,Name:'تبریز'},
    {Id:2,Name:'تهران'},
  ];
  city:City=new City();
  cats:AdvertismentCat[]=[];

  // constructor(public dialog:MatDialog,
  //   public dialogRef:MatDialogRef<AdvertismentInsUpComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data:AdvertismentInsUp
  // ){}
  Insert(){

  }

  onNoClick(){
    
  }
}
