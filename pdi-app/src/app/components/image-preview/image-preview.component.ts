import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { ImageProcessorService } from 'src/app/services/image-processor/image-processor.service';
import { Image } from 'src/app/services/uploader/uploader.service';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {

  @ViewChild('imagePreviewElem') imagePreview: ElementRef;
  loaded: boolean = false;

  constructor(
    private processor: ImageProcessorService,
    public configService: ConfigService
  ) { }

  ngAfterViewInit(): void {
    this.processor.loadedImage.subscribe((image) => {
      if (!image) return;
      this.loaded = true;
      this.paint(image);
    });
  }

  /**
   *  Pinta o canvas com o preview da imagem recebida por parâmetro
   *  @param image Imagem processada pelo loader
   */
  private paint(image: Image) {
    const canvas = this.imagePreview.nativeElement;
    const context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, image.width, image.height);

    canvas.width = image.width;
    canvas.height = image.height;
    for (let i = 0; i < image.data.length; i++) {
      if (image.format == "P2") context.fillStyle = `rgb(${image.data[i].r}, ${image.data[i].r}, ${image.data[i].r})`;
      else if (image.format == "P3") context.fillStyle = `rgb(${image.data[i].r}, ${image.data[i].g}, ${image.data[i].b})`;
      context.fillRect(i % image.width, Math.floor(i / image.width), 1, 1);
    }
  }

}
