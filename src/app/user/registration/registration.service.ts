import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../user.model";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private firestore: AngularFirestore) { }

  public addUserToDb(user: User): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('user')
        .add(user)
        .then(res => {
        }, err => reject(err));
    });
  }
}
