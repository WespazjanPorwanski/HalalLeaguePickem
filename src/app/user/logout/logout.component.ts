import {Component, HostListener, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginService} from "../login/login.service";
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private _router: Router,
              private loginService: LoginService,
              private cookieService: CookieService) {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      this.loginService.isLogged = false;
      this.loginService.currentUser.name = '';
      this.cookieService.deleteCookie('halalLeagueUser');
      this._router.navigate(['home']);
    });
  }

  ngOnInit(): void {
  }
}
