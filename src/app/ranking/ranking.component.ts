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
    this.loginService.getUsersFromDBbByPoints().subscribe(res => {
      console.log(res[0].payload.doc.data())
      if (res[0].payload.doc.data() instanceof Array) {
        this.ranking = res[0].payload.doc.data()
      } else {
        this.ranking = [res[0].payload.doc.data()];
      }
    })
  }

  isUserLogged(): boolean {
    return this.loginService.isLogged;
  }


}
