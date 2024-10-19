import { Component, Inject } from '@angular/core';
import { AdvertismentCat } from '../../../Models/AdvertismentCat';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { AdvertismentCatService } from '../advertisment-cat.service';

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
  styleUrl: './insert-advertisment-cat.component.css',
  providers:[AdvertismentCatService]
})
export class InsertAdvertismentCatComponent {

  model:AdvertismentCat=new AdvertismentCat();
  isEdit:boolean=false;
  constructor(public dialog:MatDialog,
    public dialogRef:MatDialogRef<InsertAdvertismentCatComponent>,
    @Inject(MAT_DIALOG_DATA) public data:AdvertismentCat,
    private _AdvertismentCatService:AdvertismentCatService
  ){
    if(!!data.id){
      this.isEdit=true;
      this.model=data;
    }
  }
  Insert(){
    if(!this.isEdit){
      this._AdvertismentCatService.Insert(this.model).subscribe(res=>{
        this.onNoClick();
      })
    }
    else{
      this._AdvertismentCatService.Update(this.model).subscribe(res=>{
        this.onNoClick();
      })
    }
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
