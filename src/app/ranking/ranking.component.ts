import {Component, OnInit} from '@angular/core';
import {currentRank, Ranks} from "./ranks.model";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  ranking: Ranks[] = currentRank;

  constructor() {
  }

  ngOnInit(): void {
  }

}
