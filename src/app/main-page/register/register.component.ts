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
import { MatCardAvatar, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
    MatCardContent,
    MatCardTitle,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[RegisterService
  ]
})
export class RegisterComponent {

  user:User=new User();
  pass:string="";
  public logoSrc:string="/assets/Img/download.jpg"
  type:number=1;
  headerName:string="";

  constructor(private _RegisterService:RegisterService,
    private cookieService: CookieService,
    private router:Router,
    private route : ActivatedRoute
  ){
    this.route.params.subscribe(params => {
      console.log(params['type']);
      this.type = params['type'];
    });

    if(this.type==1){
      this.headerName="کارجو";
      this.user.RoleType=3;
    }
    if(this.type==2){
      this.headerName="کارفرما";
      this.user.RoleType=2;
    }
  }
  // ngOnInit() {
  //   this.type = this.route.snapshot.params['type'];
  //   console.log(this.type)
  // }
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  errorMessage:string="";
  async Register(){
    console.log(this.user);
    this.user.Password=await this.hash(this.pass);
  this._RegisterService.Register(this.user).subscribe(res=>{
    if(res.token!=""){
      this.cookieService.set('token', res.token);
      this.router.navigate(["AdvertismentCat"]);
    }
  },e=>{
    this.errorMessage=e.error;
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
