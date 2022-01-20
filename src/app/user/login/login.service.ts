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

  public getUsersFromDBbByPoints(): Observable<any> {
    return this.firestore.collection('user', ref => ref.orderBy('points', 'desc'))
      .snapshotChanges()
  }
}
