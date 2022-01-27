import {Component, OnInit} from '@angular/core';
import {WeekService} from "./week.service";
import {Week, week2} from "../team-picker/week.model";
import {UserWeekService} from "../user/user-week.service";
import {UserWeek} from "../user/user.model";
import {matchesResult} from "./result-week.model";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  week2: Week = week2;
  matchResults = matchesResult;

  constructor(private weekService: WeekService, private userWeekService: UserWeekService) {
  }

// 5 pkt za gre, 10 perfect day, 10 perfect week,
  addToWeeks() {
    this.userWeekService.getAllUserWeek().then(res => {
      if (res && res.length > 0) {
        res.forEach(r => {
          let userWeek: UserWeek = r.payload.doc.data();
          let currentWeek = userWeek.weeks.find((we: Week) => we.weekNumber === 2);
          let weekPoints = 0;
          // @ts-ignore
          currentWeek.days.forEach(day => {
            let dayPoints = 0;
            day.matches.forEach(match => {
              let mr = this.matchResults.find(m => m.id === match.id);
              // @ts-ignore
              match.winner = mr.winner;
              if (match.pick === match.winner) {
                dayPoints += 5;
                match.matchPoints = 5;
              }
            })
            if (dayPoints === 25) {
              dayPoints += 10;
            }
            day.dayPoints = dayPoints;
            weekPoints += dayPoints;
          })
          if (weekPoints == 70) {
            weekPoints += 10;
          }
          userWeek.points = weekPoints;
          console.log("done")
          // @ts-ignore
          let index = userWeek.weeks.indexOf(currentWeek);
          // @ts-ignore
          userWeek.weeks[index] = currentWeek

          this.userWeekService.addUserWeek(userWeek)
        })
      }
    }, error => {
      console.log("error")
    })
  }

  ngOnInit(): void {
  }

  saveWeek() {
    this.weekService.addWeek(week2);
  }

}
