import {Component, OnInit} from '@angular/core';
import {Week, week2} from "./week.model";
import {Match} from "./match.model";

@Component({
  selector: 'app-team-picker',
  templateUrl: './team-picker.component.html',
  styleUrls: ['./team-picker.component.scss']
})
export class TeamPickerComponent implements OnInit {

  week: Week = week2;

  constructor() {
  }

  ngOnInit(): void {
  }


  selectWinner(match: Match, number: number) {
    match.id = number;
  }
}
