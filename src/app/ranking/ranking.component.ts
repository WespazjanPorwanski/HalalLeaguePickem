import {Component, OnInit} from '@angular/core';
import {LoginService} from "../user/login/login.service";
import {User} from "../user/user.model";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  ranking: User[] = [];

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.getUsersFromDBbByPoints().then(res => {
      this.ranking = res;
    })
  }

  isUserLogged(): boolean {
    return this.loginService.isLogged;
  }


}
