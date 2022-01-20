import {Component, OnInit} from '@angular/core';
import {LoginService} from "../user/login/login.service";
import {CookieService} from "../user/cookie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName = '';

  constructor(private loginService: LoginService,
              private cookieService: CookieService) {
    if(this.cookieService.getCookie('halalLeagueUser')){
      this.loginService.currentUser.name = this.cookieService.getCookie('halalLeagueUser');
      this.loginService.isLogged = true;
    }
  }

  isUserLogged(): boolean {
    if (this.loginService.isLogged) {
      this.userName = this.loginService.currentUser.name;
    }
    return this.loginService.isLogged;
  }

  ngOnInit(): void {
  }

}
