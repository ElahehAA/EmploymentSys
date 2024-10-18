import { Component, signal } from '@angular/core';
import { User } from '../../../Models/User';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { RegisterService } from './register.service';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

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
  styleUrl: './register.component.css',
  providers:[RegisterService]
})
export class RegisterComponent {

  user:User=new User();
  pass:string="";
  constructor(private _RegisterService:RegisterService){

  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  async Register(){
    console.log(this.user);
    this.user.Password=await this.hash(this.pass);
  this._RegisterService.Register(this.user).subscribe(res=>{
    
  })
  }


  async hash(item:string) {
    const utf8 = new TextEncoder().encode(item);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }
}
