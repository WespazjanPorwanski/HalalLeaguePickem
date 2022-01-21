import {Component, OnInit} from '@angular/core';
import {Week, week2} from "./week.model";
import {Match} from "./match.model";
import {LoginService} from "../user/login/login.service";
import {User, UserWeek} from "../user/user.model";
import {UserWeekService} from "../user/user-week.service";

@Component({
  selector: 'app-team-picker',
  templateUrl: './team-picker.component.html',
  styleUrls: ['./team-picker.component.scss']
})
export class TeamPickerComponent implements OnInit {

  week: Week = week2;
  userWeek: UserWeek = {user: new User(), week: new Week(), points: 0};

  constructor(private loginService: LoginService, private userWeekService: UserWeekService) {
  }

  ngOnInit(): void {
    this.userWeek.user = this.loginService.currentUser;
    this.userWeekService.getUserWeek(this.userWeek).subscribe(res => {
      if (res && res.length > 0) {
        this.userWeek.week = res[0].payload.doc.data().week;
      } else {
        this.userWeek.week = this.week;
      }
    })
  }

  isUserLogged(): boolean {
    return this.loginService.isLogged;
  }

  savePicks() {
    this.userWeekService.addUserWeek(this.userWeek)
  }

  selectWinner(match: Match, number: number) {
    match.pick = number;
    this.savePicks();
  }
}
