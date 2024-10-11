import { Component, Inject } from '@angular/core';
import { AdvertismentCat } from '../../../Models/AdvertismentCat';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-insert-advertisment-cat',
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
    MatDivider],
  templateUrl: './insert-advertisment-cat.component.html',
  styleUrl: './insert-advertisment-cat.component.css'
})
export class InsertAdvertismentCatComponent {

  model:AdvertismentCat=new AdvertismentCat();

  constructor(public dialog:MatDialog,
    public dialogRef:MatDialogRef<InsertAdvertismentCatComponent>,
    @Inject(MAT_DIALOG_DATA) public data:AdvertismentCat
  ){}
  Insert(){

  }

  onNoClick(){
    
  }
}
