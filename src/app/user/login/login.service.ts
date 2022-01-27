import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../user.model";
import {CryptoService} from "../crypto.service";
import {Observable, Subject} from "rxjs";
import {CookieService} from "../cookie.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: User = {name: '', password: '', points: 0}
  isLogged = false;

  constructor(private firestore: AngularFirestore,
              private cryptoService: CryptoService,
              private cookieService: CookieService) {
  }

  public checkUser(user: User): Observable<User> {
    let userSubject = new Subject<User>();

    this.getUserFromDBb(user).subscribe(
      res => {
        if (this.cryptoService.decrypt(res[0].payload.doc.data().password) == user.password) {
          this.currentUser.name = res[0].payload.doc.data().name;
          this.isLogged = true;
          this.cookieService.setCookie('halalLeagueUser', this.currentUser.name, 30, '')
          userSubject.next(this.currentUser);
        } else {
          console.log("Wrong credentials");
        }
      })
    return userSubject.asObservable();
  }

  private getUserFromDBb(user: User): Observable<any> {
    return this.firestore.collection('user', ref => ref.where('name', '==', user.name))
      .snapshotChanges()
  }

  public getUsersFromDBbByPoints(): Promise<any[]> {
    return new Promise(resolve => {
      let snapshot = this.firestore.collection('user', ref => ref.orderBy('points', 'desc')).get();
      let users: any[] = [];
      snapshot.forEach(user => {
        user.docs.forEach(doc => {
          let data = doc.data();
          let us = new User();
          // @ts-ignore
          us.name = data.name;
          // @ts-ignore
          us.points = data.points;
          users.push(us)
          resolve(users)
        })
      });
    })
  }
}
