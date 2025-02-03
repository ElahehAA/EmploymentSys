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
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatCard,
    MatCardContent,
    MatButton,
    MatCardHeader,
    MatDivider,
    MatIconModule,
    MatButtonModule,
    MatButtonToggle,
    MatButtonToggleGroup,
  MatDivider,
RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public logoSrc:string="/assets/Img/download.jpg"
  constructor(private dialog:MatDialog){

  }


  OpenLoginPageKaryab(){
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width:"50%",
      data: {type:1},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      }
    });
  }

  OpenLoginPageKarfarma(){
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width:"50%",
      data: {type:2},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      }
    });
  }

}
