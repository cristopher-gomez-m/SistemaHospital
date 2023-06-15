import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private storage: any;
  constructor(private storageService: StorageService) {}

  setItem(key: string, value: any): void {
    this.storageService.secureStorage.setItem(key, value);
  }

  getItem(key: any): any {
    return this.storageService.secureStorage.getItem(key);
  }

  clear(): void {
    return this.storageService.secureStorage.clear();
  }
}