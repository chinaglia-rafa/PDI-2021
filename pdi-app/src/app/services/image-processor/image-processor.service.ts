import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Image } from 'src/app/services/uploader/uploader.service';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessorService {

  loadedImage = new BehaviorSubject(null);
  private history: Image[] = [];

  public invertFilter: boolean = false;

  constructor() { }

  isLoaded(): boolean {
    return this.loadedImage.value !== null;
  }

  /** Inverte as cores da imagem atual. */
  invert() {
    if (!this.loadedImage.value) return;
    let currentImage = this.loadedImage.value;
    this.history = [].concat(history, currentImage.value);
    for (let i = 0; i < currentImage.data.length; i++) {
      if (currentImage.format == "P2") {
        currentImage.data[i].r = currentImage.max - currentImage.data[i].r;
      }

    }

    this.loadedImage.next(currentImage);
  }

  reset() {
    console.log("for the love of god");
    this.invertFilter = true;
  }
}
