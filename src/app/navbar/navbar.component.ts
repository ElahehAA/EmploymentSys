import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  username:string="";
  constructor( private cookieService: CookieService){
    this.username=this.cookieService.get('username');
    console.log(this.username)
  }

  
}
