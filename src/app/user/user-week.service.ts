import {Injectable} from '@angular/core';
import {User, UserWeek} from "./user.model";
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
      .collection('userWeek')
      .doc(userWeek.user.name)
      .set(userWeek)
      .then(res => {
      }, err => console.log(err));
  }

  public getUserWeek(userWeek: UserWeek): Observable<any> {
    return this.firestore.collection('userWeek', ref => ref.where('user.name', '==', userWeek.user.name))
      .snapshotChanges()
  }
}
