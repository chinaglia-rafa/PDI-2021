import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessorService {

  loadedImage = new BehaviorSubject(null);

  constructor() { }
}
