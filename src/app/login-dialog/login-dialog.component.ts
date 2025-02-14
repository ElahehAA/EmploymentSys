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
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardContent, MatCardHeader, MatCardModule, MatCardTitle } from '@angular/material/card';

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
    MatDivider,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatProgressBarModule,
    RouterLink
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css',
  providers:[LoginService
  ]
})
export class LoginDialogComponent {

  user:User=new User();
  pass:string="";
  progressing:boolean=false;
  type:number=1;
  headerName:string="";
  constructor(private dialog:MatDialog,
    private dialogref:MatDialogRef<LoginDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any,
    private _LoginService:LoginService,
    private cookieService: CookieService,
    private router:Router
  ){
    this.type=data.type;
    if(this.type==1){
      this.headerName="کارجو";
      this.user.RoleType=3;
    }
    if(this.type==2){
      this.headerName="کارفرما";
      this.user.RoleType=2;
    }
  }

  errorMessage:string="";
  async Login(){
    this.progressing=true;
    var hashPas=await this.hash(this.pass);
    this.user.Password=hashPas;
    this._LoginService.Login(this.user).subscribe(res=>{
      this.progressing=false;
      if(res.token!=""){
        this.cookieService.set('user',JSON.stringify(res));
        localStorage.setItem('token',res.token)
        this.router.navigate(["AdvertismentCat"]);
        this. onNoClick();
      }
    },e=>{
    this.progressing=false;
      console.log(e.error);
      this.errorMessage=e.error;
    })
  }

  onNoClick(){
    this.dialogref.close();
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
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
