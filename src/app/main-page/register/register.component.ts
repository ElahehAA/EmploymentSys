import { Component, signal } from '@angular/core';
import { User } from '../../../Models/User';
import { MatFormField, MatLabel, MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInkBar } from '@angular/material/tabs';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatDialogClose,
    MatButton,
    MatDialogContent,
    MatIcon,
    MatDialogTitle,
    MatDivider,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User=new User();
  constructor(){

  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  Register(){
    
  }
}
