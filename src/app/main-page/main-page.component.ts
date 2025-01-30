import { Component } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatCard,
    MatCardContent,
    MatButton,
    MatCardHeader,
    MatDivider],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public logoSrc:string="/assets/Img/download.jpg"
  constructor(private dialog:MatDialog){

  }


  OpenLoginPage(){
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width:"50%",
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      }
    });
  }
}
