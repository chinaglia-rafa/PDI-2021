import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public pixelated: boolean = true;
  public realSize: boolean = false;

  constructor() { }

  isPixelated(): boolean {
    return this.pixelated;
  }

  isRealSize(): boolean {
    return this.realSize;
  }
}
