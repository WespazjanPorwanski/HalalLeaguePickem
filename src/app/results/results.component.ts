import {Component, OnInit} from '@angular/core';
import {Week, week2} from "../team-picker/week.model";
import {User, UserWeek} from "../user/user.model";
import {LoginService} from "../user/login/login.service";
import {UserWeekService} from "../user/user-week.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  weeks: Week[] = [week2];
  userWeek: UserWeek = {user: new User(), weeks: this.weeks, points: 0};

  constructor(private loginService: LoginService, private userWeekService: UserWeekService) {
  }

  ngOnInit(): void {
    this.userWeek.user = this.loginService.currentUser;
    this.userWeekService.getUserWeek(this.userWeek).subscribe(res => {
      if (res && res.length > 0) {
        this.userWeek.weeks = res[0].payload.doc.data().weeks;
      } else {
        this.userWeek.weeks = this.weeks;
      }
    })
  }

  isUserLogged(): boolean {
    return this.loginService.isLogged;
  }

}
