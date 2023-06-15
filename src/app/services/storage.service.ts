import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

declare var require: any;

const SecureStorage = require('secure-web-storage');
const SECRET_KEY: any = '$1ST3M@D3FLUJ0PR0Y3CT@D0';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {
    //
  }

  public secureStorage = new SecureStorage(sessionStorage, {
    hash: function hash(key: any) {
      key = CryptoJS.SHA256(key, SECRET_KEY);
      return key.toString();
    },
    encrypt: function encrypt(data: any) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();

      return data;
    },
    decrypt: function decrypt(data: any) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);

      return data;
    },
  });
}