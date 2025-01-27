import { Component, EventEmitter, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../../Models/Login';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userjson:string="";
  user:Login=new Login();
  constructor( private cookieService: CookieService){
    this.userjson=this.cookieService.get('user');
    this.user=JSON.parse(this.userjson);
    
  }

}
