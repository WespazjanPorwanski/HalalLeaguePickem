import {Injectable} from '@angular/core';
import {UserWeek} from "./user.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserWeekService {

  constructor(private firestore: AngularFirestore) {
  }

  public addUserWeek(userWeek: UserWeek) {
    this.firestore
      .collection('asdasd')
      .doc(userWeek.user.name)
      .set(userWeek)
      .then(res => {
        console.log("")
      }, err => console.log(err));
  }

  public getUserWeek(userWeek: UserWeek): Observable<any> {
    return this.firestore.collection('userWeek', ref => ref.where('user.name', '==', userWeek.user.name))
      .snapshotChanges()
  }

  public async getAllUserWeek(): Promise<any[]> {
    let snapshot = await this.firestore.collection('userWeek').get()
    let userWeeks: any[] = [];
    snapshot.forEach(userWeek => {
      console.log(userWeek)
    });
    return userWeeks;
  }
}
