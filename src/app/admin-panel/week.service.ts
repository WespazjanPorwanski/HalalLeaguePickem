import { Injectable } from '@angular/core';
import {Week, week2} from "../team-picker/week.model";
import {UserWeek} from "../user/user.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class WeekService {

  constructor(private firestore: AngularFirestore) { }

  public addWeek(week: Week) {
    this.firestore
      .collection('week')
      .doc(week.weekId)
      .set(week)
      .then(res => {
      }, err => console.log(err));
  }

}
