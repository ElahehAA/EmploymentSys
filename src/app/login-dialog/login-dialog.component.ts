import { Component, Inject, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatDialogContent } from '@angular/material/dialog';
import { User } from '../../Models/User';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-login-dialog',
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
    MatDivider
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {

  user:User=new User();
  constructor(private dialog:MatDialog,
    private dialogref:MatDialogRef<LoginDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any
  ){

  }

  Login(){

  }

  onNoClick(){

  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
