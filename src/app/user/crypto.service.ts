import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {secretKey} from "./secret-key.model";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  secretKey = secretKey;

  constructor() {
  }

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt: string) {
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }

}
